import http from "./config";

const order = {
  get: () => http.get("/order/all", { params: { page: 1, limit: 10 } }),
 
};

export default order;
