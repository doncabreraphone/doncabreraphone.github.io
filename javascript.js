
if($("#menu").length)
{
// Open and Close menu
document.addEventListener("click", function(e) {
    var menu = document.getElementById("menu");
    if (e.target != menu && !menu.contains(e.target)) {
        menu.classList.remove("open");
    } else {
        menu.classList.toggle("open");
    }
});
}


if($("#bg-video").length)
{
    var video = document.getElementById("bg-video");

    // set current time and duration
    video.currentTime = 6; // start at 30 seconds
    video.duration = 60; // play for 10 seconds
    video.playbackRate = 1; // play at half speed

    // play video
    video.play();

    // loop video
    setInterval(function(){
        video.currentTime = 6;
        video.play();
    }, 48000);
    
    function playVideo() {
        var video = document.getElementById("bg-video");
        video.play();
    };
    
}

if($("#message").length)
{
/// typeriter
var message = "Bienvenidos\n<Discover Argentina & Chile with us>";
var messageEl = document.getElementById("message");
var i = 0;
var bold = false;
function typeWriter() {
  if (i < message.length) {
    var newChar = document.createElement("span");
    newChar.classList.add("animated", "fadeIn");
    if (message[i] === '<') {
      bold = true;
      i++;
    } else if (message[i] === '>') {
      bold = false;
      i++;
    } 
    else if(message[i] === '\n'){
      newChar.innerHTML = "<br>";
      i++
    }
    else if (bold) {
      newChar.style.fontWeight = 'bold';
      newChar.classList.add("bold");
      newChar.innerHTML = message[i];
      i++;
    } else {
      newChar.innerHTML = message[i];
      i++;
    }
    messageEl.appendChild(newChar);
    setTimeout(typeWriter, 55);
  }   else {
      // Fade in button
      var button = document.getElementById("get-started");
      button.innerHTML = "Get Started";
      button.classList.add("animated", "fadeIn");
      button.style.display = "block";
    }
  }

  setTimeout(function(){
      typeWriter();
    }, 3300);

}

    $(document).ready(function() {
      
        if ($("body").hasClass("open")) {
          setTimeout(function(){
            $("#lg").attr("src", "images/logo_blue.png");
          }, 600);
        }
      
        $("#get-started").on("click", function() {
          if ($("body").hasClass("open")) {
            $("#bottom-cards").addClass("d-none");
            $("body").removeClass("open");
            $("#lg").attr("src", "images/logo.png");
          } else {
            $("body").addClass("open");
            $('#menu_toggle').removeClass('d-none').addClass('animate__fadeIn');
            $("#bottom-cards").removeClass("d-none");
            setTimeout(function(){
              $("#lg").attr("src", "images/logo_blue.png");
              if($("#destinations").length) {
                $("#logo").toggleClass('opened');
              }
            }, 600);
          }
        });


        $('#menu_toggle').on('click', function(){
            $("#lg").attr("src", "images/logo.png");
            $('body').toggleClass('open');
            $("#bottom-cards").addClass("d-none");
             setTimeout(function(){
            if($("#destinations").length) {
                $("#logo").toggleClass('opened');
              }
            }, 600);

            if ($("body").hasClass("open")) {
                setTimeout(function(){
                    $("#lg").attr("src", "images/logo_blue.png");
                    }, 600);
                } else {
                    $("#lg").attr("src", "images/logo.png");
                }
        });   
        
      
        if($("#hero").length) {
            var viewportHeight  = $(window).height();
            var newMargin = viewportHeight  - ( viewportHeight * 0.65) + 60; 
            $(".hero-text").css('margin-top', '-' + newMargin + 'px' );
            var newMarginBottom = newMargin * 0.5;
            $(".hero-text").css('margin-bottom', '+' + newMarginBottom + 'px');
            console.log(viewportHeight );
            console.log(newMargin);
        }


        if($("#hero").length) {
            $(window).scroll(function() {
                var divTop = $("#map_wrap").offset().top;
                var viewportTop = $(window).scrollTop();
                var divBottom = divTop + $("#map_wrap").height();
                var viewportBottom = viewportTop + $(window).height();
                var mapPosition = $("#left_map").css("position");
                if (divTop <= viewportTop && divBottom >= viewportBottom) {
                  $("#left_map").css("position", "fixed");
                  
                  // calculate the center position of the image
                  var imageHeight = $("#left_map").height();
                  var viewportHeight = $(window).height();
                  var topPosition = (viewportHeight - imageHeight) / 2;
                  
                  var imageWidth = $("#left_map").width();
                  var viewportWidth = $(window).width();
                  var leftPosition = (viewportWidth - imageWidth) / 2;
                  
                  // set the position of the image
                  $("#left_map").css("top", topPosition + "px");
                //   $("#left_map").css("left", leftPosition + "px");
                } else {
                  $("#left_map").css("position", "absolute");
                  $("#left_map").css("bottom", topPosition + "px");
                  if (divTop <= viewportTop) {
                      $("#left_map").css("top", "auto");

                  }

                  if(mapPosition === "fixed"){
                      $("#left_map").css("top", "0px");
                      $("#left_map").css("bottom", "0px");
                  }
                }
              });
                      




              $(window).scroll(function() {
                var map1Top = $("#map1").offset().top;
                var viewportTop = $(window).scrollTop();
                var map1Bottom = map1Top + $("#map1").height();
                var viewportBottom = viewportTop + $(window).height();
                var map2Top = $("#map2").offset().top;
                var map2Bottom = map2Top + $("#map2").height();
                if (map1Top <= viewportTop && map1Bottom >= viewportTop) {
                  $("#mapDiv1").css("display", "block");
                  $("#mapDiv2").css("display", "none");
                } else if (map2Top <= viewportTop && map2Bottom >= viewportTop) {
                  $("#mapDiv1").css("display", "none");
                  $("#mapDiv2").css("display", "block");
                }
              });

              

              $(window).scroll(function() {
                clearTimeout($.data(this, 'scrollTimer'));
                $.data(this, 'scrollTimer', setTimeout(function() {
                  var map1Top = $("#map1").offset().top;
                  var viewportTop = $(window).scrollTop();
                  var viewportBottom = viewportTop + $(window).height();
                  var map1Bottom = map1Top + $("#map1").height();
                  var map2Top = $("#map2").offset().top;
                  var map2Bottom = map2Top + $("#map2").height();
                  if (map1Bottom <= viewportBottom && map1Bottom >= viewportTop) {
                    $("#mapDiv1").css("display", "block");
                    $("#mapDiv2").css("display", "none");
                  } else if (map2Bottom <= viewportBottom && map2Bottom >= viewportTop) {
                    $("#mapDiv1").css("display", "none");
                    $("#mapDiv2").css("display", "block");
                  }
                }, 150));
              });
        }


      });

