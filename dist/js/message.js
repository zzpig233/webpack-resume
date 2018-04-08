'use strict';

!function () {
  var model = Model({ resourceName: 'Message' });

  var view = View('section.message');

  var controller = Controller({
    messageList: null,
    form: null,
    init: function init(view, controller) {
      this.messageList = view.querySelector('#messageList');
      this.form = view.querySelector('form');
      this.loadMessages();
      // object 上有这三个属性吗
    },
    loadMessages: function loadMessages() {
      var _this = this;

      this.model.fetch().then(function (messages) {
        var array = messages.map(function (item) {
          return item.attributes;
        });
        array.forEach(function (item) {
          var li = document.createElement('li');
          li.innerText = item.name + ': ' + item.content;
          _this.messageList.appendChild(li);
        });
      });
    },
    bindEvents: function bindEvents() {
      var _this2 = this;

      console.log(this.form);
      this.form.addEventListener('submit', function (e) {
        e.preventDefault();
        _this2.saveMessage();
      });
    },
    saveMessage: function saveMessage() {
      var myForm = this.form;
      var content = myForm.querySelector('input[name=content]').value;
      var name = myForm.querySelector('input[name=name]').value;
      this.model.save({
        'name': name, 'content': content
      }).then(function (object) {
        var li = document.createElement('li');
        li.innerText = object.attributes.name + ': ' + object.attributes.content;
        var messageList = document.querySelector('#messageList');
        messageList.appendChild(li);
        myForm.querySelector('input[name=content]').value = '';
        console.log(object);
      });
    }
  });

  controller.init(view, model);
}.call();