import { mutationField, nonNull } from 'nexus'

export const UrlSettingsCreateOneMutation = mutationField(
  'createOneUrlSettings',
  {
    type: nonNull('urlSettings'),

    resolve(_parent, { data }, { prisma, select }) {
      return prisma.urlSettings.create({
        data,
        ...select,
      })
    },
  },
)
