import request from 'umi-request';

export async function login(params) {
  return request('/api/auth/login', {
    method: 'POST',
    data: params,
  });
}
export async function getCode() {
  return request('/api/code', {
    method: 'GET',
  });
}
export async function getUserInfo() {
  return request('/api/system/user/getUserInfo', {
    method: 'GET',
  });
}
export async function logout() {
  return request('/api/auth/logout', {
    method: 'DELETE',
  });
}
