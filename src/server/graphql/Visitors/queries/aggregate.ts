import { queryField, list } from 'nexus'

export const VisitorsAggregateQuery = queryField('aggregateVisitors', {
  type: 'AggregateVisitors',
  args: {
    where: 'VisitorsWhereInput',
    orderBy: list('VisitorsOrderByWithRelationInput'),
    cursor: 'VisitorsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.visitors.aggregate({ ...args, ...select }) as any
  },
})
