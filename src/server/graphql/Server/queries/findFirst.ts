import { queryField, list } from 'nexus'

export const ServerFindFirstQuery = queryField('findFirstServer', {
  type: 'Server',
  args: {
    where: 'ServerWhereInput',
    orderBy: list('ServerOrderByWithRelationInput'),
    cursor: 'ServerWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ServerScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.server.findFirst({
      ...args,
      ...select,
    })
  },
})
