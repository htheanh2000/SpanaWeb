export interface SignUpResponse {
  message: string;
}

export interface SalonProductsResponse {
  message: string;
  data: ProductType[];
}

export interface ProductType {
  _id: string;
  count: number;
  data: ProductDetail[];
}

export interface ProductDetail {
  _id: string;
  name: string;
  type: string;
  description: string;
  price: number;
  coupon: number;
  image: string;
}
