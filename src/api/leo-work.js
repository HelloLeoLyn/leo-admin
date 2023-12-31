import request from '@/utils/request'
import { service } from '@/api/index'
export function api_work_post(data) {
  return request({
    url: service + '/work',
    method: 'post',
    data
  })
}

export function api_work_post_mock(data) {
  return request({
    url: '/vue-element-admin/work',
    method: 'post',
    data
  })
}

export function api_work_put(data) {
  return request({
    url: service + '/work',
    method: 'put',
    data
  })
}

export function api_work_put_mock(data) {
  return request({
    url: '/vue-element-admin/work',
    method: 'post',
    data
  })
}

export function api_work_delete(id) {
  return request({
    url: service + '/work/' + id,
    method: 'delete'
  })
}

export function api_work_delete_mock(id) {
  return request({
    url: '/vue-element-admin/work/' + id,
    method: 'delete',
  })
}

export function api_work_get(id) {
  return request({
    url: service + '/work/' + id,
    method: 'get'
  })
}

export function api_work_get_mock(id) {
  return request({
    url: '/vue-element-admin/work/' + id,
    method: 'get',
  })
}

export function api_work_page_mock(data) {
  return request({
    url: '/vue-element-admin/work/page',
    method: 'post',
    data
  })
}

export function api_work_page(data) {
  return request({
    url: service + '/work/page',
    method: 'post',
    data
  })
}

export function api_work_date_get(date) {
  return request({
    url: service + '/work/date/' + date,
    method: 'get'
  })
}
