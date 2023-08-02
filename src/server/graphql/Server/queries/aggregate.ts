import { queryField, list } from 'nexus'

export const ServerAggregateQuery = queryField('aggregateServer', {
  type: 'AggregateServer',
  args: {
    where: 'ServerWhereInput',
    orderBy: list('ServerOrderByWithRelationInput'),
    cursor: 'ServerWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.server.aggregate({ ...args, ...select }) as any
  },
})
