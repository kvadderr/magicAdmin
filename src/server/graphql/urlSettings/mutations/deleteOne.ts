import { mutationField, nonNull } from 'nexus'

export const UrlSettingsDeleteOneMutation = mutationField(
  'deleteOneUrlSettings',
  {
    type: 'UrlSettings',
    args: {
      where: nonNull('UrlSettingsWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.urlSettings.delete({
        where,
        ...select,
      })
    },
  },
)
