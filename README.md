# cspace-ui-plugin-record-taxon

[![npm package](https://img.shields.io/npm/v/cspace-ui-plugin-record-taxon.svg)](https://www.npmjs.com/package/cspace-ui-plugin-record-taxon)
[![continuous integration](https://github.com/collectionspace/cspace-ui-plugin-record-taxon.js/actions/workflows/ci-js.yml/badge.svg?branch=master&event=push)](https://github.com/collectionspace/cspace-ui-plugin-record-taxon.js/actions/workflows/ci-js.yml)

Taxon record plugin for the CollectionSpace UI.

## Installation

### For developers

Follow these instructions to download and install the source code of the plugin.

Using git:

```
$ git clone https://github.com/collectionspace/cspace-ui-plugin-record-taxon.js.git
$ cd cspace-ui-plugin-record-taxon.js
$ npm install
```

To run the cspace-ui application configured with this plugin:

```
$ npm run devserver
```

Then open a browser to http://localhost:8080.

By default, the application served from the dev server will use the CollectionSpace services API
located at http://localhost:8180.

To run the application against CollectionSpace services located on a different host, edit
index.html, and change the `serverUrl` configuration property. For example, to use a server running
on core.dev.collectionspace.org, use the settings:

```
cspaceUI({
  serverUrl: 'https://core.dev.collectionspace.org',
  // ...
});
```
