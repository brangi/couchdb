// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ["main"],

  paths: {
    // JavaScript folders.
    libs: "../assets/js/libs",
    plugins: "../assets/js/plugins",

    // Libraries.
    jquery: "../assets/js/libs/jquery",
    underscore: "../assets/js/libs/underscore",
    backbone: "../assets/js/libs/backbone",
    bootstrap: "../assets/js/libs/bootstrap",
    codemirror: "../assets/js/libs/codemirror",
    jshint: "../assets/js/libs/jshint",
    d3: "../assets/js/libs/d3",
    "nv.d3": "../assets/js/libs/nv.d3"
  },

  shim: {
    // Backbone library depends on underscore and jQuery.
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },

    bootstrap: {
      deps: ["jquery"],
      exports: "Bootstrap"
    },

    codemirror: {
      deps: ["jquery"],
      exports: "CodeMirror"
    },

    jshint: {
      deps: ["jquery"],
      exports: "JSHINT"
    },

    // Backbone.LayoutManager depends on Backbone.
    "plugins/backbone.layoutmanager": ["backbone", "underscore"],

    "plugins/codemirror-javascript": ["codemirror"],

    "plugins/prettify": []
  }

});
