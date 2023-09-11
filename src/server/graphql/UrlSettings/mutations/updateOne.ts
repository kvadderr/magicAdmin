import { mutationField, nonNull } from 'nexus'

export const UrlSettingsUpdateOneMutation = mutationField(
  'updateOneUrlSettings',
  {
    type: nonNull('UrlSettings'),
    args: {
      data: nonNull('UrlSettingsUpdateInput'),
      where: nonNull('UrlSettingsWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.urlSettings.update({
        where,
        data,
        ...select,
      })
    },
  },
)
