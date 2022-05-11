import { ListResponse } from './../../models/common';
import { dashboardActions, RankingByCity } from './dashboardSlice';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import studentApi from 'api/studentApi';
import productApi from 'api/salon/productApi';
import { City, Student } from 'models';
import cityApi from 'api/cityApi';
import { ProductType } from 'models/response';
import { ToastError } from 'utils/toastify';

function* fetchStatistics() {
  // Run at the same time, if all Effect Creators inside all are blocking then all will be blocking and vice versa
  const responseList: Array<ListResponse<Student>> = yield all([
    // Blocking
    call(studentApi.getAll, { _page: 1, _limit: 1, gender: 'male' }), // Male quantity
    call(studentApi.getAll, { _page: 1, _limit: 1, gender: 'female' }), // Female quantity
    call(studentApi.getAll, { _page: 1, _limit: 1, mark_gte: 8 }), // > 8
    call(studentApi.getAll, { _page: 1, _limit: 1, mark_lte: 5 }), // < 5
  ]);

  const statisticsList = responseList.map((x) => x.pagination._totalRows);
  const [maleCount, femaleCount, highMarkCount, lowMarkCount] = statisticsList;
  yield put(
    dashboardActions.setStatistics({
      maleCount,
      femaleCount,
      highMarkCount,
      lowMarkCount,
    })
  );
}

function* fetchHighestStudentList() {
  const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
    _page: 1,
    _limit: 5,
    _sort: 'mark',
    _order: 'desc',
  });

  yield put(dashboardActions.setHighestStudentList(data));
}
function fetchSalonAllProducts() {
  return productApi.getAllProducts({ _id: '6267edd08cf58f40be3009cb' });
}

function* fetchLowestStudentList() {
  const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
    _page: 1,
    _limit: 5,
    _sort: 'mark',
    _order: 'asc',
  });

  yield put(dashboardActions.setLowestStudentList(data));
}

function* fetchRankingCityList() {
  // Fetch city list
  const { data: cityList }: ListResponse<City> = yield call(cityApi.getAll);

  // Fetch ranking per city
  const callList = cityList.map((x) =>
    call(studentApi.getAll, {
      _page: 1,
      _limit: 5,
      _sort: 'mark',
      _order: 'desc',
      city: x.code,
    })
  );
  const responseList: Array<ListResponse<Student>> = yield all(callList);
  const rankingByCityList: Array<RankingByCity> = responseList.map(
    (x, idx) => ({
      cityId: cityList[idx].code,
      cityName: cityList[idx].name,
      rankingList: x.data,
    })
  );

  // Update state
  yield put(dashboardActions.setRankingCityList(rankingByCityList));
}

function* fetchDashboardData() {
  try {
    yield all([
      call(fetchStatistics),
      call(fetchHighestStudentList),
      call(fetchLowestStudentList),
      call(fetchRankingCityList),
    ]);

    yield put(dashboardActions.fetchDataSuccess());
  } catch (error) {
    console.log(`Failed to fetch dashboard data`, error);
    yield put(dashboardActions.fetchDataFailed());
  }
}
function* getSalonAllProducts() {
  try {
    const response: { data: ProductType[] } = yield call(fetchSalonAllProducts);
    yield put(dashboardActions.getSalonAllProductsSuccess(response.data));
  } catch (error: any) {
    console.log(`Failed to fetch dashboard data`, error);
    if (error.response) {
      ToastError(error.response.data.message);
    } else {
      ToastError(error.message);
    }
    yield put(dashboardActions.getSalonAllProductsFailed());
  }
}

export default function* dashboardSaga() {
  yield takeLatest(dashboardActions.fetchData.type, fetchDashboardData);
  yield takeLatest(
    dashboardActions.getSalonAllProducts.type,
    getSalonAllProducts
  );
}
