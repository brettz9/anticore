import { getPrimitiveOf } from '../../object/getPrimitiveOf'
import { getTypeOf } from '../../object/getTypeOf'

const type = 'boolean'

export function isBoolean (value) {
  return getTypeOf(value) === type ||
    getPrimitiveOf(value) === type
}
