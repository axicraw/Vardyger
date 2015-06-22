'use strict';

/**
 * Module dependencies
 * If a module is a directory, the file in the module directory that will be evaluated must be named index.js
 */

var hbs         = require('express-hbs'),
    coreHelpers = {};

coreHelpers.asset  = require('./asset');
coreHelpers.author  = require('./author');
coreHelpers.body_class  = require('./body_class');
coreHelpers.content  = require('./content');
coreHelpers.date   = require('./date');
coreHelpers.encode = require('./encode');
coreHelpers.excerpt = require('./excerpt');
coreHelpers.foreach = require('./foreach');
coreHelpers.ghost_foot = require('./ghost_foot');
coreHelpers.ghost_head = require('./ghost_head');
coreHelpers.has = require('./has');
coreHelpers.meta_description  = require('./meta_description');
coreHelpers.meta_title  = require('./meta_title');
coreHelpers.navigation  = require('./navigation');
coreHelpers.tags  = require('./tags');
coreHelpers.title  = require('./title');
coreHelpers.url  = require('./url');

function registerThemeHelperSync(name, fn) {
  hbs.registerHelper(name, fn);
}

function registerHelpers() {
  registerThemeHelperSync('asset', coreHelpers.asset);
  registerThemeHelperSync('author', coreHelpers.author);
  registerThemeHelperSync('body_class', coreHelpers.body_class);
  registerThemeHelperSync('content', coreHelpers.content);
  registerThemeHelperSync('date', coreHelpers.date);
  registerThemeHelperSync('encode', coreHelpers.encode);
  registerThemeHelperSync('excerpt', coreHelpers.excerpt);
  registerThemeHelperSync('foreach', coreHelpers.foreach);
  registerThemeHelperSync('ghost_foot', coreHelpers.ghost_foot);
  registerThemeHelperSync('ghost_head', coreHelpers.ghost_head);
  registerThemeHelperSync('has', coreHelpers.has);
  registerThemeHelperSync('meta_description', coreHelpers.meta_description);
  registerThemeHelperSync('meta_title', coreHelpers.meta_title);
  registerThemeHelperSync('navigation', coreHelpers.navigation);
  registerThemeHelperSync('tags', coreHelpers.tags);
  registerThemeHelperSync('title', coreHelpers.title);
  registerThemeHelperSync('url', coreHelpers.url);
}

module.exports = coreHelpers;
module.exports.loadCoreHelpers = registerHelpers;
module.exports.registerThemeHelperSync = registerThemeHelperSync;
