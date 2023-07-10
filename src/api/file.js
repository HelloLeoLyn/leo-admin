import request from '@/utils/request'
import { host, auto_part_port } from './index'
const api_pre = 'http://' + host + ':' + auto_part_port


export function fileUpload(params) {
  return request({
    url: `${api_pre}/fileUpload`,
    method: 'post',
    params
  })
}

export function fileRemove(id) {
  return request({
    url: `${api_pre}/image/${id}`,
    method: 'delete'
  })
}