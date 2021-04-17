import { getdept, appMenuTree } from './service';

const Model = {
  namespace: 'lihghtmodel',
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
    *getdept({ payload }, { call, put }) {
      const response = yield call(getdept, payload);
      yield put({
        type: 'getdept',
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
  },
  reducers: {
    getdept(state, { payload }) {
      return { ...state, current: payload };
    },
    appmenuTree(state, { payload }) {
      return { ...state, current: payload };
    },
  },
};
export default Model;
