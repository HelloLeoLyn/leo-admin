import request from '@/utils/request'
import { service } from '@/api/index'
export function api_message_post(data) {
  return request({
    url: service + '/message',
    method: 'post',
    data
  })
}

export function api_message_post_mock(data) {
  return request({
    url: '/vue-element-admin/message',
    method: 'post',
    data
  })
}

export function api_message_put(data) {
  return request({
    url: service + '/message',
    method: 'put',
    data
  })
}

export function api_message_put_mock(data) {
  return request({
    url: '/vue-element-admin/message',
    method: 'post',
    data
  })
}

export function api_message_delete(id) {
  return request({
    url: service + '/message/' + id,
    method: 'delete'
  })
}

export function api_message_delete_mock(id) {
  return request({
    url: '/vue-element-admin/message/' + id,
    method: 'delete',
  })
}

export function api_message_get(id) {
  return request({
    url: service + '/message/' + id,
    method: 'get'
  })
}

export function api_message_get_mock(id) {
  return request({
    url: '/vue-element-admin/message/' + id,
    method: 'get',
  })
}

export function api_message_page(data) {
  return request({
    url: service + '/message/page',
    method: 'post',
    data
  })
}

export function api_message_page_mock(data) {
  return request({
    url: '/vue-element-admin/message/page',
    method: 'post',
    data
  })
}
