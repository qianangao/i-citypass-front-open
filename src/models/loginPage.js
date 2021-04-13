import { login, getCode } from '../services/loginPage';
import { history } from 'umi';
import { message } from 'antd';

const Model = {
  namespace: 'loginPageContent',
  state: {
    loginObj: {},
    codeObj: {},
  },
  effects: {
    *authLogin({ payload }, { call, put }) {
      const response = yield call(login, payload);
      yield put({
        type: 'login',
        payload: response.data,
      });
      if (response.code === 200) {
        message.success('登录成功！');
        const urlParams = new URL(window.location.href);
        const url = urlParams.pathname;
        history.push(url || '/');
      } else {
        message.error(response.msg);
      }
      return response;
    },
    *authGetCode({ payload }, { call, put }) {
      const response = yield call(getCode, payload);
      yield put({
        type: 'loginCode',
        payload: response.data,
      });
    },
  },
  reducers: {
    login(state, action) {
      return { ...state, loginObj: action.payload || {} };
    },
    loginCode(state, action) {
      return { ...state, codeObj: action.payload || {} };
    },
  },
};
export default Model;
