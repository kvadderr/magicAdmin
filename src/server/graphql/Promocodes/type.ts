import { objectType } from 'nexus'

export const Promocodes = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Promocodes',
  definition(t) {
    t.int('id')
    t.string('name')
    t.int('countOfActivation')
    t.field('createdAt', { type: 'DateTime' })
    t.field('startDate', { type: 'DateTime' })
    t.field('endDate', { type: 'DateTime' })
    t.nullable.int('discountAmount')
    t.nullable.int('depositBonus')
    t.nullable.int('plusBonusBalance')
    t.int('limitActivation')
    t.string('groupId')
    t.nullable.string('itemSet')
  },
})
