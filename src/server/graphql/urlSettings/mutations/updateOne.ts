import { mutationField, nonNull } from 'nexus'

export const UrlSettingsUpdateOneMutation = mutationField(
  'updateOneUrlSettings',
  {
    type: nonNull('urlSettings'),

    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.urlSettings.update({
        where,
        data,
        ...select,
      })
    },
  },
)
