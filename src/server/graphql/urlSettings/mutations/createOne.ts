import { mutationField, nonNull } from 'nexus'

export const UrlSettingsCreateOneMutation = mutationField(
  'createOneUrlSettings',
  {
    type: nonNull('UrlSettings'),
    args: {
      data: nonNull('UrlSettingsCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.urlSettings.create({
        data,
        ...select,
      })
    },
  },
)
