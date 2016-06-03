var tplIndex=require('../tpl/index.string');

SPA.defineView('indexView',{
    html:tplIndex,
    plugins:['delegated'],
    bindActions:{
      'exit':function(){
        this.hide();
      }
    }
})
