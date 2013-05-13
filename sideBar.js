$(document).on("pageinit", "#home", function(e){
    var percent = .66;
    var menuStatus = false;
    var margin = $(window).width() * percent;
    var wheight = $(window).height();

function initializeMenu(){
  $("#menu").css({
    'z-index': '-100',
    width: margin,
    height: wheight
  }).page().show();
};

function sendForeground(){
  $("#menu").css({
    'z-index': '100'
  });
};

function sendBackground(){
  $("#menu").css({
    'z-index': '-100'
  });
};
  
  function showMenu(){
    if(menuStatus == false){
      $(".ui-page-active").animate({
        marginLeft: margin
      }, 500, function(){
        sendForeground();
      });
      menuStatus = true;
    } else {
      sendBackground();
      $(".ui-page-active").animate({
        marginLeft: "0px"
      }, 500);
      menuStatus = false;
    }
  };
  
  $(document).on("swiperight", function(e){
    if(!menuStatus){
      showMenu();
    }
  });
  
  $(document).on("swipeleft", function(e){
    if(menuStatus){
      showMenu();
    }
  });

initializeMenu();

$(document).on("click", ".showMenu", function(){
    showMenu();    
});

      $(".menubtn").on("click", function(){
        sendBackground();
        $(".ui-page-active").animate({
          marginLeft: "0px"
        }, 0);
        menuStatus = false;
      });
  });