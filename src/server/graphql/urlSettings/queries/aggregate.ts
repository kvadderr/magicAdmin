import { queryField, list } from 'nexus'

export const UrlSettingsAggregateQuery = queryField('aggregateUrlSettings', {
  type: 'AggregateUrlSettings',

  resolve(_parent, args, { prisma, select }) {
    return prisma.urlSettings.aggregate({ ...args, ...select }) as any
  },
})
