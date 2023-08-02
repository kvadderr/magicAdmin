import { mutationField, nonNull } from 'nexus'

export const ServerDeleteManyMutation = mutationField('deleteManyServer', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ServerWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.server.deleteMany({ where } as any)
  },
})
