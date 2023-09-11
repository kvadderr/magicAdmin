import { queryField, list } from 'nexus'

export const VisitorsFindFirstQuery = queryField('findFirstVisitors', {
  type: 'Visitors',
  args: {
    where: 'VisitorsWhereInput',
    orderBy: list('VisitorsOrderByWithRelationInput'),
    cursor: 'VisitorsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('VisitorsScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.visitors.findFirst({
      ...args,
      ...select,
    })
  },
})
