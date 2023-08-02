import { queryField, nonNull, list } from 'nexus'

export const ServerFindManyQuery = queryField('findManyServer', {
  type: nonNull(list(nonNull('Server'))),
  args: {
    where: 'ServerWhereInput',
    orderBy: list('ServerOrderByWithRelationInput'),
    cursor: 'ServerWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ServerScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.server.findMany({
      ...args,
      ...select,
    })
  },
})
