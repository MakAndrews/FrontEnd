function Model(data) {
  var self = this;
  self.data = data;
  self.addItem = function (item) {
    if (item.lenght === 0) {
      return;
    }
    self.data.push(item);
    return self.data;
  };
  self.removeItem = function (item) {
    var index = self.data.indexOf(item);
    if (index === -1) {
      return;
    }
    self.data.splice(index, 1);
    return self.data;
  };
};
function View(model) {
  var self = this;

    function init() {
    var wrapper = tmpl($('#wrapper-template').html());
    $('body').append(wrapper);
    self.elements = {
      input: $('.item-value'),
      addBtn: $('.item-add'),
      listContainer: $('.list')
    };
    self.renderList(model.data);
  };
  self.renderList = function (data) {
    var list = tmpl($('#list-template').html(), {data: data});
    self.elements.listContainer.html(list);
  };
  init();

};
function Controller(model, view) {
  var self = this;
  view.elements.addBtn.on('click', addItem);
  view.elements.listContainer.on('click', '.item-delete', removeItem);
  function addItem() {
    var newItem = view.elements.input.val();
    model.addItem(newItem);
    view.renderList(model.data);
    view.elements.input.val('');
  }
  function removeItem() {
    var item = $(this).attr('data-value');
    model.removeItem(item);
    view.renderList(model.data);
  }
}

$(function() {
  var first = ['test 1', 'test 2'];
  var model = new Model(first);
  var view = new View(model);
  var controller = new Controller(model, view);
/*
  //разминка
  console.log('hello everybody!');
  var params = {
    width: '20px',
    height: '20px',
    border: '1px solid blue',
    'background-color': 'skyblue',
    'margin-top': '20px',
    'margin-left': '20px',
    'border-radius': '100%'
  };

  localStorage.setItem('data',JSON.stringify(params));
  console.log(localStorage.getItem('data'));
//localStorage.clear();

  var params1 = {
    say: function (x) {
      console.log(x);
    }
  };
  params1.prototype = params;
  console.log(params1);
  params1.say('HEllO!');
  console.log(params1.prototype.border);

  $('body').append('<div>');
  $('div').css(JSON.parse(localStorage.getItem('data')));
  var n=20;
  setInterval (function () {
      n++;
      $('div').css({
        'margin-top': n+'px',
        'margin-left': n+'px'
      });
      if (n==40) {n=20};
  },50);
  */
  //кодинг MVC

});
