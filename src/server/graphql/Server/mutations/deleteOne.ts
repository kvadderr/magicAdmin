import { mutationField, nonNull } from 'nexus'

export const ServerDeleteOneMutation = mutationField('deleteOneServer', {
  type: 'Server',
  args: {
    where: nonNull('ServerWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.server.delete({
      where,
      ...select,
    })
  },
})
