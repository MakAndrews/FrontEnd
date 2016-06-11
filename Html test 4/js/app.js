requirejs.config({
  paths: {
    'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery'
  },
  shim: {
    'jquery': {
      exports: 'jquery'
    }
  }
})

require (
  [
    'jquery',
    'Model',
    'View',
    'Controller'
  ],
  function ($, model, view, controller) {

    

  }
);
