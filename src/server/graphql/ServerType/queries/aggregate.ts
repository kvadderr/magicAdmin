import { queryField, list } from 'nexus'

export const ServerTypeAggregateQuery = queryField('aggregateServerType', {
  type: 'AggregateServerType',
  args: {
    where: 'ServerTypeWhereInput',
    orderBy: list('ServerTypeOrderByWithRelationInput'),
    cursor: 'ServerTypeWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.serverType.aggregate({ ...args, ...select }) as any
  },
})
