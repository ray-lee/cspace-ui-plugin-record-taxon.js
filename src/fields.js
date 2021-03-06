import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CheckboxInput,
    CompoundInput,
    HierarchyInput,
    OptionPickerInput,
    RichTextInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      [config]: {
        view: {
          type: CompoundInput,
          props: {
            defaultChildSubpath: 'ns2:taxon_common',
          },
        },
      },
      'rel:relations-common-list': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/relation',
          },
        },
        'relation-list-item': {
          [config]: {
            view: {
              type: HierarchyInput,
              props: {
                messages: defineMessages({
                  parent: {
                    id: 'hierarchyInput.taxon.parent',
                    defaultMessage: 'Broader taxon name',
                  },
                  children: {
                    id: 'hierarchyInput.taxon.children',
                    defaultMessage: 'Narrower taxon names',
                  },
                  siblings: {
                    id: 'hierarchyInput.taxon.siblings',
                    defaultMessage: 'Adjacent taxon names',
                  },
                }),
              },
            },
          },
        },
      },
      ...extensions.core.fields,
      'ns2:taxon_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/taxonomy',
          },
        },
        ...extensions.authItem.fields,
        taxonTermGroupList: {
          [config]: {
            messages: defineMessages({
              required: {
                id: 'field.taxon_common.taxonTermGroupList.required',
                defaultMessage: 'At least one term display name is required. Please enter a value.',
              },
            }),
            required: true,
            view: {
              type: CompoundInput,
            },
          },
          taxonTermGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.taxon_common.taxonTermGroup.name',
                  defaultMessage: 'Term',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            termDisplayName: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.taxon_common.termDisplayName.fullName',
                    defaultMessage: 'Term display name',
                  },
                  name: {
                    id: 'field.taxon_common.termDisplayName.name',
                    defaultMessage: 'Display name',
                  },
                }),
                required: true,
                view: {
                  type: TextInput,
                },
              },
            },
            termName: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.taxon_common.termName.fullName',
                    defaultMessage: 'Term name',
                  },
                  name: {
                    id: 'field.taxon_common.termName.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            termType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.taxon_common.termType.fullName',
                    defaultMessage: 'Term type',
                  },
                  name: {
                    id: 'field.taxon_common.termType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'taxonTermTypes',
                  },
                },
              },
            },
            termFlag: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.taxon_common.termFlag.fullName',
                    defaultMessage: 'Term flag',
                  },
                  name: {
                    id: 'field.taxon_common.termFlag.name',
                    defaultMessage: 'Flag',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'taxontermflag',
                  },
                },
              },
            },
            termStatus: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.taxon_common.termStatus.fullName',
                    defaultMessage: 'Term status',
                  },
                  name: {
                    id: 'field.taxon_common.termStatus.name',
                    defaultMessage: 'Status',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'taxonTermStatuses',
                  },
                },
              },
            },
            termQualifier: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.taxon_common.termQualifier.fullName',
                    defaultMessage: 'Term qualifier',
                  },
                  name: {
                    id: 'field.taxon_common.termQualifier.name',
                    defaultMessage: 'Qualifier',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            termLanguage: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.taxon_common.termLanguage.fullName',
                    defaultMessage: 'Term language',
                  },
                  name: {
                    id: 'field.taxon_common.termLanguage.name',
                    defaultMessage: 'Language',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'languages',
                  },
                },
              },
            },
            termPrefForLang: {
              [config]: {
                dataType: DATA_TYPE_BOOL,
                messages: defineMessages({
                  fullName: {
                    id: 'field.taxon_common.termPrefForLang.fullName',
                    defaultMessage: 'Term preferred for lang',
                  },
                  name: {
                    id: 'field.taxon_common.termPrefForLang.name',
                    defaultMessage: 'Preferred for lang',
                  },
                }),
                view: {
                  type: CheckboxInput,
                },
              },
            },
            termSource: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.taxon_common.termSource.fullName',
                    defaultMessage: 'Term source name',
                  },
                  groupName: {
                    id: 'field.taxon_common.termSource.groupName',
                    defaultMessage: 'Source name',
                  },
                  name: {
                    id: 'field.taxon_common.termSource.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'citation/local,citation/shared,citation/worldcat',
                  },
                },
              },
            },
            termSourceDetail: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.taxon_common.termSourceDetail.fullName',
                    defaultMessage: 'Term source detail',
                  },
                  groupName: {
                    id: 'field.taxon_common.termSourceDetail.groupName',
                    defaultMessage: 'Source detail',
                  },
                  name: {
                    id: 'field.taxon_common.termSourceDetail.name',
                    defaultMessage: 'Detail',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            termSourceID: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.taxon_common.termSourceID.fullName',
                    defaultMessage: 'Term source ID',
                  },
                  groupName: {
                    id: 'field.taxon_common.termSourceID.groupName',
                    defaultMessage: 'Source ID',
                  },
                  name: {
                    id: 'field.taxon_common.termSourceID.name',
                    defaultMessage: 'ID',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            termSourceNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.taxon_common.termSourceNote.fullName',
                    defaultMessage: 'Term source note',
                  },
                  groupName: {
                    id: 'field.taxon_common.termSourceNote.groupName',
                    defaultMessage: 'Source note',
                  },
                  name: {
                    id: 'field.taxon_common.termSourceNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            termFormattedDisplayName: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.taxon_common.termFormattedDisplayName.name',
                    defaultMessage: 'Formatted display name',
                  },
                }),
                view: {
                  type: RichTextInput,
                },
              },
            },
            taxonomicStatus: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.taxon_common.taxonomicStatus.name',
                    defaultMessage: 'Taxonomic status',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'taxonomicStatuses',
                  },
                },
              },
            },
          },
        },
        taxonRank: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.taxon_common.taxonRank.name',
                defaultMessage: 'Rank',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'taxonRanks',
              },
            },
          },
        },
        taxonCurrency: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.taxon_common.taxonCurrency.name',
                defaultMessage: 'Currency',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'taxonCurrencies',
              },
            },
          },
        },
        taxonAuthorGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          taxonAuthorGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.taxon_common.taxonAuthorGroup.name',
                  defaultMessage: 'Author',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            taxonAuthor: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.taxon_common.taxonAuthor.fullName',
                    defaultMessage: 'Author name',
                  },
                  name: {
                    id: 'field.taxon_common.taxonAuthor.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,person/shared,organization/local,organization/shared',
                  },
                },
              },
            },
            taxonAuthorType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.taxon_common.taxonAuthorType.fullName',
                    defaultMessage: 'Author type',
                  },
                  name: {
                    id: 'field.taxon_common.taxonAuthorType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'taxonAuthorTypes',
                  },
                },
              },
            },
          },
        },
        taxonYear: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.taxon_common.taxonYear.name',
                defaultMessage: 'Year',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        taxonCitationList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          taxonCitation: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.taxon_common.taxonCitation.name',
                  defaultMessage: 'Citation',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'citation/local,citation/shared,citation/worldcat',
                },
              },
            },
          },
        },
        taxonIsNamedHybrid: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.taxon_common.taxonIsNamedHybrid.name',
                defaultMessage: 'Is named hybrid',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        taxonNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.taxon_common.taxonNote.name',
                defaultMessage: 'Note',
              },
            }),
            searchView: {
              type: TextInput,
            },
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        commonNameGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          commonNameGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.taxon_common.commonNameGroup.name',
                  defaultMessage: 'Common name',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            commonName: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.taxon_common.commonName.fullName',
                    defaultMessage: 'Common name',
                  },
                  name: {
                    id: 'field.taxon_common.commonName.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            commonNameLanguage: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.taxon_common.commonNameLanguage.fullName',
                    defaultMessage: 'Common name language',
                  },
                  name: {
                    id: 'field.taxon_common.commonNameLanguage.name',
                    defaultMessage: 'Language',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'languages',
                  },
                },
              },
            },
            commonNameSource: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.taxon_common.commonNameSource.fullName',
                    defaultMessage: 'Common name source',
                  },
                  name: {
                    id: 'field.taxon_common.commonNameSource.name',
                    defaultMessage: 'Source',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'citation/local,citation/shared',
                  },
                },
              },
            },
            commonNameSourceDetail: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.taxon_common.commonNameSourceDetail.fullName',
                    defaultMessage: 'Common name source detail',
                  },
                  name: {
                    id: 'field.taxon_common.commonNameSourceDetail.name',
                    defaultMessage: 'Source detail',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
      },
    },
  };
};
