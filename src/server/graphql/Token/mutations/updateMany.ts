import { mutationField, nonNull } from 'nexus'

export const TokenUpdateManyMutation = mutationField('updateManyToken', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('TokenUpdateManyMutationInput'),
    where: 'TokenWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.token.updateMany(args as any)
  },
})
