import { objectType } from 'nexus'

export const Transaction = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Transaction',
  definition(t) {
    t.int('id')
    t.nullable.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.nullable.int('userId')
    t.string('method')
    t.int('amount')
    t.field('createdAt', { type: 'DateTime' })
    t.field('status', { type: 'EStatusOfRefill' })
  },
})
