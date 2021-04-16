import request from 'umi-request';

// 列表
export async function lihghtList(params) {
  return request('/api/system/lightApp/list', {
    method: 'GET',
    params: params,
  });
}
// 所属菜单
export async function appMenuTree() {
  return request('/api/system/lightApp/appMenuTree', {
    method: 'GET',
  });
}
//   获取部门
export async function getdept() {
  return request('/api/system/lightApp/getDept', {
    method: 'GET',
  });
}
//   获取类别
export async function getDictData() {
  return request('/api/system/lightApp/getDictData?dictType=sys_app_type', {
    method: 'GET',
  });
}
//   新增轻应用
export async function lihghtAdd(params) {
  return request('/api/system/lightApp/insert', {
    method: 'POST',
    data: params,
  });
}
//  轻应用详情
export async function lihghtdetail(params) {
  return request(`/api/system/lightApp/detail/${params}`, {
    method: 'GET',
  });
}
//  轻应用编辑
export async function lihghtupdate(params) {
  return request(`/api/system/lightApp/update`, {
    method: 'POST',
    data: params,
  });
}
