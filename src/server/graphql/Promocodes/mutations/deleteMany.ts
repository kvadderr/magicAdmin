import { mutationField, nonNull } from 'nexus'

export const PromocodesDeleteManyMutation = mutationField(
  'deleteManyPromocodes',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'PromocodesWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.promocodes.deleteMany({ where } as any)
    },
  },
)
