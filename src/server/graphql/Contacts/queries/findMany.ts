import { queryField, nonNull, list } from 'nexus'

export const ContactsFindManyQuery = queryField('findManyContacts', {
  type: nonNull(list(nonNull('Contacts'))),
  args: {
    where: 'ContactsWhereInput',
    orderBy: list('ContactsOrderByWithRelationInput'),
    cursor: 'ContactsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ContactsScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.contacts.findMany({
      ...args,
      ...select,
    })
  },
})
