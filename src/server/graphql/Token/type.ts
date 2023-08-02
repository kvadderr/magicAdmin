import { objectType } from 'nexus'

export const Token = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Token',
  definition(t) {
    t.int('id')
    t.string('token')
    t.nullable.field('User', {
      type: 'User',
      resolve(root: any) {
        return root.User
      },
    })
    t.int('userId')
    t.nullable.string('deviceType')
    t.nullable.string('deviceName')
    t.nullable.string('clientIp')
    t.nullable.string('browser')
    t.nullable.string('os')
  },
})
