export const ENDPOINTS = {
  GET_ORDERS: (limit: number, offset?: number) => `orders?limit=${limit}`,
  GET_ORDER_DETAIL: (id: string) => `orders/${id}`,
};
