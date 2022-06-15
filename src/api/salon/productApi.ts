import { SalonId } from 'models';
import { SalonProductsResponse } from 'models/response';
import axiosClient from '../axiosClient';

const authApi = {
  getAllProducts(data: SalonId): Promise<SalonProductsResponse> {
    const url = `/salon/${data._id}/product`;
    return axiosClient.get(url);
  },
};

export default authApi;
