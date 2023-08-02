import { mutationField, nonNull } from 'nexus'

export const UrlSettingsUpsertOneMutation = mutationField(
  'upsertOneUrlSettings',
  {
    type: nonNull('urlSettings'),

    resolve(_parent, args, { prisma, select }) {
      return prisma.urlSettings.upsert({
        ...args,
        ...select,
      })
    },
  },
)
