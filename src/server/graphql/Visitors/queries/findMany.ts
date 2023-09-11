import { queryField, nonNull, list } from 'nexus'

export const VisitorsFindManyQuery = queryField('findManyVisitors', {
  type: nonNull(list(nonNull('Visitors'))),
  args: {
    where: 'VisitorsWhereInput',
    orderBy: list('VisitorsOrderByWithRelationInput'),
    cursor: 'VisitorsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('VisitorsScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.visitors.findMany({
      ...args,
      ...select,
    })
  },
})
