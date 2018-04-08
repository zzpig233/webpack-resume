'use strict';

!function () {
  var model = {
    init: function init() {
      var APP_ID = 'TsDnap9SEXjSvGSowP7gXXJC-gzGzoHsz';
      var APP_KEY = 'rGye31p12mM3wFpNRn9RADu9';
      AV.init({ appId: APP_ID, appKey: APP_KEY });
    },

    fetch: function fetch() {
      var query = new AV.Query('X');
      return query.find(); // Promise 对象
    },
    // 创建数据
    save: function save(name) {
      var Message = AV.Object.extend('X');
      var message = new Message();
      return message.save({ // Promise 对象
        'name': name
      });
    }
  };

  var view = View('#topNavBar');

  var controller = {
    view: null,
    init: function init(view) {
      this.view = view;
      this.bindEvents();
      // this.bindEvnets.call(this)
    },
    bindEvents: function bindEvents() {
      var _this = this;

      var view = this.view;
      window.addEventListener('scroll', function (x) {
        if (window.scrollY > 0) {
          _this.active();
        } else {
          _this.deactive();
        }
      });
      // 箭头函数没有 this
    },
    active: function active() {
      this.view.classList.add('sticky');
    },
    deactive: function deactive() {
      this.view.classList.remove('sticky');
    }

  };
  controller.init(view);
  // controller.init.call(controller, view)
}.call();