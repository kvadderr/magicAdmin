import { queryField, nonNull } from 'nexus'

export const ContactsFindUniqueQuery = queryField('findUniqueContacts', {
  type: 'Contacts',
  args: {
    where: nonNull('ContactsWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.contacts.findUnique({
      where,
      ...select,
    })
  },
})
