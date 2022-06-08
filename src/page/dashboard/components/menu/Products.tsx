import { Box, Skeleton } from '@mui/material';
import { ProductType } from 'models/response';
import { formatNumber } from 'utils';
import fakeImage from '../../../../assets/image/spa/1.jpg';

const Products = ({
  value,
  index,
  children,
  loading,
}: {
  value: number;
  index: number;
  children: ProductType[] | string;
  loading: boolean;
}) => {
  return (
    <>
      {value === index && index === 0 && (
        <Box sx={{ p: 3 }}>
          {!loading &&
            typeof children !== 'string' &&
            children.map((product, index) => (
              <div className="relative" key={index}>
                <div className="">
                  <p className="font-bold text-headline mb-4">{product._id}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 mb-4 gap-2">
                  {product.data.map((item, index) => (
                    <div key={index} className="border-[1px] p-2 rounded-md">
                      <div className="Image">
                        <img src={fakeImage} alt="" />
                      </div>
                      <div className="flex flex-col gap-2 mt-2">
                        <h6 className="font-bold text-[14px] sm:text-base">
                          {item.name}
                        </h6>
                        <p className="text-[11px] line-clamp-2 sm:text-body2">
                          {item.description}
                        </p>
                        <div className="flex justify-between">
                          <h6 className="font-bold text-[12px] sm:text-base text-light-accent-1-color-50">
                            {formatNumber(item.price, 3)} đ
                          </h6>
                          <p className="font-bold text-[12px] text-light-text-color-body-2 line-through">
                            {formatNumber(item.price, 3)} đ
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          {loading && (
            <div className="flex items-center flex-col justify-center gap-4 mt-10">
              <div className="flex items-center gap-4">
                <Skeleton
                  variant="rectangular"
                  width={40}
                  height={40}
                  animation="wave"
                  className="rounded-md"
                />
                <div>
                  <Skeleton
                    variant="text"
                    animation="wave"
                    width={100}
                    height={20}
                  />
                  <Skeleton
                    variant="text"
                    animation="wave"
                    width={120}
                    height={20}
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Skeleton
                  variant="rectangular"
                  width={50}
                  height={50}
                  animation="wave"
                  className="rounded-md"
                />
                <div>
                  <Skeleton
                    variant="text"
                    animation="wave"
                    width={120}
                    height={20}
                  />
                  <Skeleton
                    variant="text"
                    animation="wave"
                    width={140}
                    height={20}
                  />
                </div>
              </div>
            </div>
          )}
        </Box>
      )}
    </>
  );
};

export default Products;
