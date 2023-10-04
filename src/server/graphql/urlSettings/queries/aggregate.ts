import { queryField, list } from 'nexus'

export const UrlSettingsAggregateQuery = queryField('aggregateUrlSettings', {
  type: 'AggregateUrlSettings',
  args: {
    where: 'UrlSettingsWhereInput',
    orderBy: list('UrlSettingsOrderByWithRelationInput'),
    cursor: 'UrlSettingsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.urlSettings.aggregate({ ...args, ...select }) as any
  },
})
