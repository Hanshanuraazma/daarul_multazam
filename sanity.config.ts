'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemaTypes'
import { projectId, dataset, registrationDataset } from './sanity/env'

export default defineConfig([
  {
    name: 'default',
    title: 'Daarul Multazam - Konten',
    basePath: '/studio',
    projectId,
    dataset,
    plugins: [
      structureTool(),
      visionTool(),
    ],
    schema,
  },
  {
    name: 'registration',
    title: 'Daarul Multazam - PPDB',
    basePath: '/studio/ppdb',
    projectId,
    dataset: registrationDataset,
    plugins: [
      structureTool(),
    ],
    schema: {
      types: schema.types.filter((type) => type.name === 'registration'),
    },
  },
])
