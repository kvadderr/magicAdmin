import { mutationField, nonNull } from 'nexus'

export const UrlSettingsDeleteOneMutation = mutationField(
  'deleteOneUrlSettings',
  {
    type: 'urlSettings',

    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.urlSettings.delete({
        where,
        ...select,
      })
    },
  },
)
