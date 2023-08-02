import { queryField, nonNull, list } from 'nexus'

export const TransfersFindCountQuery = queryField('findManyTransfersCount', {
  type: nonNull('Int'),
  args: {
    where: 'TransfersWhereInput',
    orderBy: list('TransfersOrderByWithRelationInput'),
    cursor: 'TransfersWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TransfersScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.transfers.count(args as any)
  },
})
