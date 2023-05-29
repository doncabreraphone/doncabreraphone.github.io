
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
        


        // show videos
        if($(".videos").length) {
            var video = $('.videos');
            video.get(0).currentTime = 1;
            video.get(0).pause();
            var videoTop, videoBottom, viewportTop, viewportBottom;
            $(window).on('scroll', function(){
                videoTop = video.offset().top;
                videoBottom = videoTop + video.height();
                viewportTop = $(window).scrollTop();
                viewportBottom = viewportTop + $(window).height();
                if (videoBottom > viewportTop && videoTop < viewportBottom) {
                    video.get(0).play();
                } else {
                    video.get(0).pause();
                }
            });
        }


        // map
        $("#map_wrap").fadeIn("slow");
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
              $('#navigation').removeClass('d-none');
            }, 600);
          }
        });


        $('#menu_toggle').on('click', function(){
            $("#lg").attr("src", "images/logo.png");
            $('body').toggleClass('open');
            $("#bottom-cards").addClass("d-none");
            $('#navigation').addClass('d-none');

       
             setTimeout(function(){
                if($("#destinations").length) {
                    $("#logo").toggleClass('opened');
                    $('#navigation').removeClass('d-none');
                }
            }, 600);

            if (!$("#country_pick").hasClass("d-none")){
                $('#country_pick').addClass("d-none");
            }

            


            if ($("body").hasClass("open")) {
                setTimeout(function(){
                    $("#lg").attr("src", "images/logo_blue.png");
                    // $('#navigation').removeClass('d-none');
                    }, 600);
                } 
            else 
            {
                $("#lg").attr("src", "images/logo.png");
                // $('#navigation').addClass('d-none');
            }
                
        });   
        
      
        if($("#hero").length) {
            var viewportHeight  = $(window).height();
            var newMargin = viewportHeight  - ( viewportHeight * 0.65) - 30; 
            $(".hero-text").css('margin-top', '-' + newMargin + 'px' );
            var newMarginBottom = newMargin * 0.3;
            $(".hero-text").css('margin-bottom', '+' + newMarginBottom + 'px');
            console.log(viewportHeight );
            console.log(newMargin);
        }

        $('.pick').click(function() {
            
             $('#country_pick').toggleClass("d-none")
          });


        if($("#destinations").length) {

            // we turn off the interest points in the maps
            $("#mapDiv1").toggleClass("anima");
            $("#mapDiv2").toggleClass("anima");
            $("#mapDiv3").toggleClass("anima");


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
                  $("#left_map").css("top",  topPosition + "px");
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
                for (var i = 1; i <= 10; i++) {
                var mapTop = $("#map" + i).offset().top;
                var viewportTop = $(window).scrollTop();
                var mapBottom = mapTop + $("#map" + i).height();
                var viewportBottom = viewportTop + $(window).height();
                if (mapTop <= viewportTop && mapBottom >= viewportTop) {
                for (var j = 1; j <= 10; j++) {
                if (i === j) {
                $("#mapDiv" + j).css("display", "block");
                } else {
                $("#mapDiv" + j).css("display", "none");
                }
                }
                }
                }
                });

              

                $(window).scroll(function() {
                    clearTimeout($.data(this, 'scrollTimer'));
                    $.data(this, 'scrollTimer', setTimeout(function() {
                      for (var i = 1; i <= 10; i++) {
                        var mapTop = $("#map" + i).offset().top;
                        var viewportTop = $(window).scrollTop();
                        var viewportBottom = viewportTop + $(window).height();
                        var mapBottom = mapTop + $("#map" + i).height();
                        if (mapBottom <= viewportBottom && mapBottom >= viewportTop) {
                          for (var j = 1; j <= 10; j++) {
                            if (i === j) {
                              $("#mapDiv" + j).addClass("anima");
                            } else {
                              $("#mapDiv" + j).removeClass("anima");
                            }
                          }
                        }
                      }
                    }, 150));
                  });
        }


        for (var i = 1; i <= 10; i++) {
            (function(i) {
                $(".mapBall_" + i).click(function() {
                    $('html, body').animate({
                        scrollTop: $("#map" + i).offset().top
                  }, 1000);
                });
            })(i);
        }

        // if($("#destinations").length) {
        //     let images = $("img");
        //     let imagesToLazyLoad = images.filter(function() {
        //       return this.src.endsWith(".webp");
        //     });
          
        //     let imagesInView = function() {
        //       let windowHeight = $(window).height();
        //       let windowTopPosition = $(window).scrollTop();
        //       let windowBottomPosition = windowTopPosition + windowHeight;
          
        //       imagesToLazyLoad.each(function() {
        //         let image = $(this);
        //         let imageTopPosition = image.offset().top;
        //         let imageBottomPosition = imageTopPosition + image.height();
          
        //         if (
        //           imageBottomPosition >= windowTopPosition &&
        //           imageTopPosition <= windowBottomPosition
        //         ) {
        //           image.attr("src", image.data("src"));
        //           imagesToLazyLoad = imagesToLazyLoad.not(image);
        //         }
        //       });
        //     };
          
        //     imagesToLazyLoad.each(function() {
        //       let image = $(this);
        //       image.attr("data-src", image.attr("src"));
        //       image.removeAttr("src");
        //     });
          
        //     $(window).scroll(function() {
        //       imagesInView();
        //     });
          
        //     imagesInView();
        // }

        var fading = false;

        $(window).scroll(function() {
          var scrollPos = $(this).scrollTop();
          if (scrollPos > 0 && !fading) {
            fading = true;
            setTimeout(function() {
              $("#top_text").fadeOut();
            }, 300);
          } else if (scrollPos === 0 && fading) {
            fading = false;
            $("#top_text").fadeIn();
          }
        });


        document.querySelector(".yr").textContent = (new Date().getFullYear());


        /* Demo purposes only */
        var snippet = [].slice.call(document.querySelectorAll('.hover'));
        if (snippet.length) {
        snippet.forEach(function (snippet) {
            snippet.addEventListener('mouseout', function (event) {
            if (event.target.parentNode.tagName === 'figure') {
                event.target.parentNode.classList.remove('hover')
            } else {
                event.target.parentNode.classList.remove('hover')
            }
            });
        });
        }


      });


      
