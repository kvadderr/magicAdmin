import { queryField, nonNull, list } from 'nexus'

export const ContactsFindCountQuery = queryField('findManyContactsCount', {
  type: nonNull('Int'),
  args: {
    where: 'ContactsWhereInput',
    orderBy: list('ContactsOrderByWithRelationInput'),
    cursor: 'ContactsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ContactsScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.contacts.count(args as any)
  },
})
