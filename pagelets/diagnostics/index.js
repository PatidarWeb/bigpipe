'use strict';

var Pagelet = require('../..').Pagelet;

Pagelet.extend({
  view: 'diagnostic.ejs',
  css: 'diagnostic.styl',

  render: function render(done) {
    done();
  }
}).on(module);
