import { queryField, nonNull, list } from 'nexus'

export const ServerFindCountQuery = queryField('findManyServerCount', {
  type: nonNull('Int'),
  args: {
    where: 'ServerWhereInput',
    orderBy: list('ServerOrderByWithRelationInput'),
    cursor: 'ServerWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ServerScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.server.count(args as any)
  },
})
