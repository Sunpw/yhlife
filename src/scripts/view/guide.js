var guide=require('../tpl/guide.string');

SPA.defineView('guide',{
  html:guide,
  plugins:['delegated'],
  bindActions:{
    'guide':function(){
        SPA.open('indexView');
    }
  }
})
