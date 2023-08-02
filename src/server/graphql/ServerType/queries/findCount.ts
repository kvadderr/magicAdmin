import { queryField, nonNull, list } from 'nexus'

export const ServerTypeFindCountQuery = queryField('findManyServerTypeCount', {
  type: nonNull('Int'),
  args: {
    where: 'ServerTypeWhereInput',
    orderBy: list('ServerTypeOrderByWithRelationInput'),
    cursor: 'ServerTypeWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ServerTypeScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.serverType.count(args as any)
  },
})
