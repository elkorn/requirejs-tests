module.exports = function(grunt) {
  'use strict';
  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    globals: {
      exports: true
    },
    test: {
      files: ['test/node/**/*.js']
    },
    jasmine: {
      src: 'lib/**/*.js',
      specs: 'test/specs/**/*spec.js',
      helpers : 'test/specs/helpers/*.js'
    },
    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'test/node/**/*.js']
    },
    watch: {
      files: ['<config:lint.files>', '<config:jasmine.specs>','<config:test.files>'],
      tasks: 'default'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true
      }
    }
  });
  grunt.loadNpmTasks('grunt-jasmine-runner');
  // Default task.
  grunt.registerTask('default', 'lint test jasmine');
};