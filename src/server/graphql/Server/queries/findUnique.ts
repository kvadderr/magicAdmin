import { queryField, nonNull } from 'nexus'

export const ServerFindUniqueQuery = queryField('findUniqueServer', {
  type: 'Server',
  args: {
    where: nonNull('ServerWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.server.findUnique({
      where,
      ...select,
    })
  },
})
