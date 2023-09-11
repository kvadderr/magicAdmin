import { queryField, nonNull } from 'nexus'

export const VisitorsFindUniqueQuery = queryField('findUniqueVisitors', {
  type: 'Visitors',
  args: {
    where: nonNull('VisitorsWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.visitors.findUnique({
      where,
      ...select,
    })
  },
})
