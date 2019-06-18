import { defineMessages } from 'react-intl';

export default {
  all: {
    messages: defineMessages({
      name: {
        id: 'vocab.taxon.all.name',
        description: 'The name of the all taxon vocabulary.',
        defaultMessage: 'All',
      },
      collectionName: {
        id: 'vocab.taxon.all.collectionName',
        description: 'The name of a collection of records from the all taxon vocabulary.',
        defaultMessage: 'All Taxonomic Names',
      },
      itemName: {
        id: 'vocab.taxon.all.itemName',
        description: 'The name of a record from the vocabulary.',
        defaultMessage: 'Taxonomic Name',
      },
    }),
    serviceConfig: {
      servicePath: '_ALL_',
    },
    type: 'all',
  },
  local: {
    messages: defineMessages({
      name: {
        id: 'vocab.taxon.local.name',
        description: 'The name of the local taxon vocabulary.',
        defaultMessage: 'Local',
      },
      collectionName: {
        id: 'vocab.taxon.local.collectionName',
        description: 'The name of a collection of records from the local taxon vocabulary.',
        defaultMessage: 'Local Taxonomic Names',
      },
      itemName: {
        id: 'vocab.taxon.local.itemName',
        description: 'The name of a record from the vocabulary.',
        defaultMessage: 'Local Taxonomic Name',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(taxon)',
    },
    sortOrder: 0,
  },
  common: {
    messages: defineMessages({
      name: {
        id: 'vocab.taxon.common.name',
        description: 'The name of the common taxon vocabulary.',
        defaultMessage: 'Common',
      },
      collectionName: {
        id: 'vocab.taxon.common.collectionName',
        description: 'The name of a collection of records from the common taxon vocabulary.',
        defaultMessage: 'Common Taxonomic Names',
      },
      itemName: {
        id: 'vocab.taxon.common.itemName',
        description: 'The name of a record from the vocabulary.',
        defaultMessage: 'Common Taxonomic Name',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(common_ta)',
    },
  },
};
