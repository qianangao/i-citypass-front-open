import request from 'umi-request';

export async function login(params) {
  return request('/auth/login', {
    method: 'POST',
    data: params,
  });
}
export async function getCode() {
  return request('/code', {
    method: 'GET',
  });
}
