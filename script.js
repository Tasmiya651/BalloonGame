//window.alert("hi")
var balloon=$(".balloon")
var counter=0
var colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]
//number of ballons on screen
// var balloonNumber=Math.random()*10
balloonNumber = 9

for(i=0;i<balloonNumber;i++){
  var balloon_color
  var balloonCopy=balloon.clone()

  //precision
  balloonCopy.css({
    left: i*200
  })
  balloonCopy.appendTo("body")

  //changing sizes of balloons

  inflatable = balloonCopy.find(".inflatable");
  string = balloonCopy.find(".string");

  balloon_width = Math.max(20, Math.floor(Math.random() * 90) + 1);
  balloon_height = 1.2 * balloon_width;

  inflatable.css({
    height: balloon_height,
    width: balloon_width,
    "border-radius": balloon_width + "px / " + balloon_height + "px"
  });
  
  string.css({
    "margin-left": (0.5*balloon_width),
    height: (0.5*balloon_height)
  });


  //gets clicked. removed.
  balloonCopy.click(function(){
    
      
    $(this).remove();
    //adding counter
    //counter = counter + 100-balloon_width;
    counter = counter + 1;
    $(".counter").html(counter);
    //var xdiff = Math.floor(Math.random() * 100);
    //balloonCopy.show();
    //balloonCopy.animate({bottom: '100%', left: xdiff + "%"}, (8000 - balloon_width*10));
  });


  //scoreboard
  //float to top from bottom in 8sec
  balloonCopy.animate({bottom:"100%"},9000);
}

window.setTimeout(function() {
  $('.scoreboard').addClass('ready');
  $('.replay').bind('click', function(e) {
    e.preventDefault();
    window.location.reload();
  });
 }, 8000);

balloon.remove();
