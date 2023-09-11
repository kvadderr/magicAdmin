import { objectType } from 'nexus'

export const Visitors = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Visitors',
  definition(t) {
    t.int('id')
    t.string('ip')
    t.string('sortDate')
    t.string('sortedMonth')
    t.field('createdAt', { type: 'DateTime' })
  },
})
