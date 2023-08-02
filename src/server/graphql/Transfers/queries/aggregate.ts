import { queryField, list } from 'nexus'

export const TransfersAggregateQuery = queryField('aggregateTransfers', {
  type: 'AggregateTransfers',
  args: {
    where: 'TransfersWhereInput',
    orderBy: list('TransfersOrderByWithRelationInput'),
    cursor: 'TransfersWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.transfers.aggregate({ ...args, ...select }) as any
  },
})
