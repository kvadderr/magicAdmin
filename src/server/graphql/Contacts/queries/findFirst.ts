import { queryField, list } from 'nexus'

export const ContactsFindFirstQuery = queryField('findFirstContacts', {
  type: 'Contacts',
  args: {
    where: 'ContactsWhereInput',
    orderBy: list('ContactsOrderByWithRelationInput'),
    cursor: 'ContactsWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ContactsScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.contacts.findFirst({
      ...args,
      ...select,
    })
  },
})
