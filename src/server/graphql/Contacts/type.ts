import { objectType } from 'nexus'

export const Contacts = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Contacts',
  definition(t) {
    t.int('id')
    t.string('name')
    t.string('url')
    t.string('icon')
  },
})
