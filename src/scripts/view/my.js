var my=require('../tpl/my.string');
SPA.defineView('myView',{
  html:my,
  plugins:['delegated'],
  bindActions:{
    
  }
})
