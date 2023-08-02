import { objectType } from 'nexus'

export const Transfers = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Transfers',
  definition(t) {
    t.int('id')
    t.field('sender', {
      type: 'User',
      resolve(root: any) {
        return root.sender
      },
    })
    t.field('receiver', {
      type: 'User',
      resolve(root: any) {
        return root.receiver
      },
    })
    t.int('senderId')
    t.int('receiverId')
    t.int('amount')
    t.field('createdAt', { type: 'DateTime' })
  },
})
