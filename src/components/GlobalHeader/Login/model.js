import { message } from 'antd';
import { login, getCode } from './service';

const Model = {
  namespace: 'loginPage',
  state: {
    codeImg: {},
  },
  effects: {
    *authLogin({ payload }, { call }) {
      yield call(login, payload);
      message.success('登录成功');
    },
    *authGetCode(_, { call, put }) {
      const response = yield call(getCode);
      yield put({
        type: 'login',
        payload: response,
      });
    },
  },
  reducers: {
    login(state, action) {
      return { ...state, codeImg: action.payload || {} };
    },
  },
};
export default Model;
