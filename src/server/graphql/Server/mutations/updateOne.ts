import { mutationField, nonNull } from 'nexus'

export const ServerUpdateOneMutation = mutationField('updateOneServer', {
  type: nonNull('Server'),
  args: {
    data: nonNull('ServerUpdateInput'),
    where: nonNull('ServerWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.server.update({
      where,
      data,
      ...select,
    })
  },
})
