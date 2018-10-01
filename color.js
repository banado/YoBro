var links={
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color',color);
  }
}
var Body={
  setColor:function(color){
    //document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  setbackgroundcolor:function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  }
}
var Menu={
  setbackgroundcolor:function(color){
    document.querySelector('nav').style.backgroundColor=color;
  }
}
function nightdayhandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setbackgroundcolor('black');
    Body.setColor('white');
    self.value = 'day';
    links.setColor('powderblue');
    Menu.setbackgroundcolor('orange');
  } else {
    Body.setbackgroundcolor('white');
    Body.setColor('black');
    self.value = 'night';
    links.setColor('blue');
    Menu.setbackgroundcolor('yellow');
    }
  }
