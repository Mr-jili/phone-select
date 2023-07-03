import http from "./http";

// 默认传参
const DEFAULT_ARG = {
  schemeCode: "LTSW",
};

// 获取选号地区列表
export const getAreaListApi = (params) => {
  return http.post("api/area/list", params);
};

// 获取号码规则列表
export const getAreaFeatureApi = (params) => {
  return http.post("api/number/areaFeature", { ...params, ...DEFAULT_ARG });
};

// 获取号码列表
export const getNumberListApi = (params) => {
  return http.post("api/number/list", { ...params, ...DEFAULT_ARG });
};

// 提交订单
export const setOrderAddApi = (params) => {
  return http.post("api/order/add", params);
};
