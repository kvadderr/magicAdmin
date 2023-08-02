import { mutationField, nonNull } from 'nexus'

export const PromocodesUpdateManyMutation = mutationField(
  'updateManyPromocodes',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('PromocodesUpdateManyMutationInput'),
      where: 'PromocodesWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.promocodes.updateMany(args as any)
    },
  },
)
