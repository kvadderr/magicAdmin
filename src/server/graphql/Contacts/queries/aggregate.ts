import { queryField, list } from 'nexus'

export const ContactsAggregateQuery = queryField('aggregateContacts', {
  type: 'AggregateContacts',
  args: {
    where: 'ContactsWhereInput',
    orderBy: list('ContactsOrderByWithRelationInput'),
    cursor: 'ContactsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.contacts.aggregate({ ...args, ...select }) as any
  },
})
