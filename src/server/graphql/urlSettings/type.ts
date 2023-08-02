import { objectType } from 'nexus'

export const urlSettings = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'urlSettings',
  definition(t) {
    t.int('id')
    t.nullable.string('icon')
    t.nullable.string('text')
    t.field('typeUrl', { type: 'ETypeOfURL' })
    t.string('url')
    t.boolean('hidden')
    t.nullable.json('sections')
    t.nullable.boolean('isHaveSidebar')
  },
})
