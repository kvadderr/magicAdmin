import { queryField, nonNull, list } from 'nexus'

export const VisitorsFindCountQuery = queryField('findManyVisitorsCount', {
  type: nonNull('Int'),
  args: {
    where: 'VisitorsWhereInput',
    orderBy: list('VisitorsOrderByWithRelationInput'),
    cursor: 'VisitorsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('VisitorsScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.visitors.count(args as any)
  },
})
