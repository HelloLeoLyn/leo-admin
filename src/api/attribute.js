import request from '@/utils/request'
import { host, auto_part_port } from './index'
const api_pre = 'http://' + host + ':' + auto_part_port
export function addProperties(data) {
  return request({
    url: api_pre + '/attribute',
    method: 'put',
    data
  })
}

export function deleteProperties(id_list) {
  return request({
    url: api_pre + '/attribute',
    method: 'delete',
    params: {
      idList: id_list
    }
  })
}

export function getProperties(id_list) {
  return request({
    url: api_pre + '/attribute',
    method: 'get',
    params: {
      idList: id_list
    }
  })
}


export function parseToAttribute(obj) {
  const list = []
  Object.keys(obj).forEach(k => {
    const attr = {}
    if(typeof(obj[k]) === 'object') {
      if(obj[k].constructor === Array) {
        const l_list = []
        obj[k].forEach(i => {
          l_list.push(parseToAttribute(i))
        })
        attr['key'] = k
        attr['value'] = null
        attr['children'] = l_list
      }else {
        const o_list = parseToAttribute(obj[k])
        attr['key'] = k
        attr['value'] = o_list
      }
    } else {
      attr['key'] = k
      attr['value'] = obj[k]
    }
    list.push(attr)
  })
  return list;
}

