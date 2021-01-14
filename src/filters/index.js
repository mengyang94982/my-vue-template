import day from 'dayjs'

import _ from 'lodash'

//普通文本格式过滤器
export function textFormat(input){
  try {
    if (_.isNil(input)||_.isNaN(input)||input === ''||input === 'null' ||input === 'undefined') {
      return '-'
    }
    return input
  } catch (error) {
    return input
  }
}

//数字过滤器
export function numberFormat(input,format){
  try {
    input=parseFloat(input)
    if (isNaN(input)) {
      return '-'
    }else{
      format=!_.inUndefined(format)?format:2
      return parseFloat((input*1).toFixed(format))
    }
  } catch (error) {
    return '-'
  }
}