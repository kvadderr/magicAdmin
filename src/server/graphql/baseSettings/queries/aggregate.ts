import { queryField, list } from 'nexus'

export const BaseSettingsAggregateQuery = queryField('aggregateBaseSettings', {
  type: 'AggregateBaseSettings',
  args: {
    where: 'BaseSettingsWhereInput',
    orderBy: list('BaseSettingsOrderByWithRelationInput'),
    cursor: 'BaseSettingsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.baseSettings.aggregate({ ...args, ...select }) as any
  },
})
