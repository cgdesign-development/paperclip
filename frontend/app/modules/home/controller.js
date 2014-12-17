define(function (require) {
    'use strict';

    var Marionette = require('marionette');
    var IndexView = require('./views/index');
    var AboutView = require('./views/about');

    return Marionette.Controller.extend({

        initialize: function (options) {
            this.app = options.app;
            this.logger = options.logger;
        },
        index : function () {
            this.app.container.show(new IndexView({
                message : 'Hello!'
            }));
        },
        about : function() {
            this.app.container.show(new AboutView());
        }
    });

});