import {
  lihghtList,
  appMenuTree,
  getdept,
  getDictData,
  lihghtAdd,
  lihghtdetail,
  lihghtupdate,
} from './service';

const Model = {
  namespace: 'lihghtList',
  state: {
    current: {},
    step: {
      payAccount: 'ant-design@alipay.com',
      receiverAccount: 'test@example.com',
      receiverName: 'Alex',
      amount: '500',
    },
  },
  effects: {
    *list({ payload }, { call, put }) {
      const response = yield call(lihghtList, payload);
      yield put({
        type: 'lightlist',
        payload: response,
      });
      return response;
    },
    *menuTree({ payload }, { call, put }) {
      const response = yield call(appMenuTree, payload);
      yield put({
        type: 'appmenuTree',
        payload: response,
      });
      return response;
    },
    *dept({ payload }, { call, put }) {
      const response = yield call(getdept, payload);
      yield put({
        type: 'getdept',
        payload: response,
      });
      return response;
    },
    *DictData({ payload }, { call, put }) {
      const response = yield call(getDictData, payload);
      yield put({
        type: 'getDictData',
        payload: response,
      });
      return response;
    },
    *Add({ payload }, { call, put }) {
      const response = yield call(lihghtAdd, payload);
      yield put({
        type: 'lihghtAdd',
        payload: response,
      });
      return response;
    },
    *detail({ payload }, { call, put }) {
      const response = yield call(lihghtdetail, payload);
      yield put({
        type: 'lihghtdetail',
        payload: response,
      });
      return response;
    },
    *update({ payload }, { call, put }) {
      const response = yield call(lihghtupdate, payload);
      yield put({
        type: 'lihghtupdate',
        payload: response,
      });
      return response;
    },
  },
  reducers: {
    lightlist(state, { payload }) {
      return { ...state, current: payload };
    },
    appmenuTree(state, { payload }) {
      return { ...state, current: payload };
    },
    getdept(state, { payload }) {
      return { ...state, current: payload };
    },
    getDictData(state, { payload }) {
      return { ...state, current: payload };
    },
    lihghtAdd(state, { payload }) {
      return { ...state, current: payload };
    },
    lihghtdetail(state, { payload }) {
      return { ...state, current: payload };
    },
    lihghtupdate(state, { payload }) {
      return { ...state, current: payload };
    },
  },
};
export default Model;
