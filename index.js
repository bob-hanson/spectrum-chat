/* jshint node: true */
'use strict';
const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'spectrum-chat',
  lazyLoading: false,
  isDevelopingAddon: function() {
    return true;
  }
});
