require('./lib/spa.min.js');
require('./view/my.js');
require('./view/classify.js');
require('./view/guide.js');
require('./view/index.js');

// 配置视图的信息
SPA.config({
  indexView: 'myView'
});
