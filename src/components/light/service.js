import request from 'umi-request';

// 列表
export async function getdept() {
  return request('/api/system/lightApp/getDept', {
    method: 'GET',
  });
}
// 所属菜单
export async function appMenuTree() {
  return request('/api/system/lightApp/appMenuTree', {
    method: 'GET',
  });
}
