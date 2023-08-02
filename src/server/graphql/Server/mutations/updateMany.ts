import { mutationField, nonNull } from 'nexus'

export const ServerUpdateManyMutation = mutationField('updateManyServer', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('ServerUpdateManyMutationInput'),
    where: 'ServerWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.server.updateMany(args as any)
  },
})
