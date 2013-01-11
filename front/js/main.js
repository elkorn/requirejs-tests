/*
requirejs.config({
  paths:{
    jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min',
    bootstrap:  'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.1.1/js/bootstrap.min',
    backbone:   'vendor/backbone',
    underscore: 'vendor/underscore'
  },
  shim: {
    'bootstrap' : ['jquery'],
    'backbone' :{
      deps: ['underscore'],
      exports: 'Backbone'
    },
    'ellipse' : {
      exports: 'Ellipse'
    },
    'backbone-1-models' : ['backbone'],
    'backbone-2-views' : ['backbone'],
    'backbone-3-routers' : ['backbone'],
    'backbone-4-collections' : ['backbone'],
    'backbone-5-ajax' : ['backbone']
  }
});
*/
requirejs.config({
    paths: {
        foo: 'dual-context-foo'
    },
    shim: {
        'foo': {
            exports: 'Foo'
        }
    }
});

require(['foo'],function(ex){
    console.log(ex);
});