'use strict';

/* 
Controller({
  init:(){
    this.view
    this.model
    this.xxx()
    this.yyy()
  },
  xxx(){}
  yyy(){}
})
  */
window.Controller = function (options) {
  var _init = options.init; // B

  var object = {
    view: null,
    model: null,
    init: function init(view, model) {
      // A
      this.view = view;
      this.model = model;
      this.model.init();
      _init.call(this, view, model); // 这是哪个 init
      this.bindEvents.call(this);
    }
  };
  for (var key in options) {
    if (key !== 'init') {
      object[key] = options[key];
    }
  }
  return object;
};