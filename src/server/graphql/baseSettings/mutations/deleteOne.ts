import { mutationField, nonNull } from 'nexus'

export const BaseSettingsDeleteOneMutation = mutationField(
  'deleteOneBaseSettings',
  {
    type: 'baseSettings',

    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.baseSettings.delete({
        where,
        ...select,
      })
    },
  },
)
