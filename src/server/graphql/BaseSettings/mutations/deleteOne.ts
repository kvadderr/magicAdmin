import { mutationField, nonNull } from 'nexus'

export const BaseSettingsDeleteOneMutation = mutationField(
  'deleteOneBaseSettings',
  {
    type: 'BaseSettings',
    args: {
      where: nonNull('BaseSettingsWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.baseSettings.delete({
        where,
        ...select,
      })
    },
  },
)
