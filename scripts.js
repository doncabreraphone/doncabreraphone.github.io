        var languageData = {};

        function loadLanguageFile(language) {
        $.getJSON(language + '.json', function(data) {
            languageData = data;
            translateText();
            updateURLParams(language);
            toggleSwitcherText(language);
        });
        }

        function translateText() {
            $('.translate').each(function() {
              var key = $(this).data('key');
          
              if (languageData[key]) {
                $(this).html(languageData[key]);
              }
            });
          }

        function updateURLParams(language) {
        var url = new URL(window.location.href);
        var pathname = window.location.pathname;
        var newURL = url.origin + pathname + '?lang=' + language;
        window.history.replaceState({}, '', newURL);
        }

        function toggleSwitcherText(language) {
        var switcherLabel = $('.form-check-label');
        if (language === 'es') {
            switcherLabel.text('English');
        } else {
            switcherLabel.text('Spanish');
        }
        }

        $('.form-check-input').click(function() {
        var isChecked = $(this).prop('checked');
        var language = isChecked ? 'es' : 'en';
        loadLanguageFile(language);
        });

        $(document).ready(function() {
        var urlParams = new URLSearchParams(window.location.search);
        var language = urlParams.get('lang');
        var userLanguage = navigator.language || navigator.userLanguage;

        if (language) {
            loadLanguageFile(language);
            var isChecked = language === 'es';
            $('.form-check-input').prop('checked', isChecked);
        } else {
            loadLanguageFile(userLanguage);
        }
        });


            


    

    //   $('.youtube-container').addClass('animate-slide');



    var player1;
    var player2;

    function onYouTubeIframeAPIReady() {
        player1 = new YT.Player('player1', {
        height: '1280',
        width: '720',
        videoId: 'af8yqwVbaO0',
        playerVars: {
            controls: 0,
            enablejsapi: 1,
            modestbranding: 1,
            disablekb: 0,
            rel: 0, // Disable related videos
            iv_load_policy: 3, // Disable annotations
            autoplay: 1,
            loop: 1,
            mute: 1,
            start: 4, // Start playing from 0:03
            showinfo: 0,
            hd: 1, // Enable highest definition
        },
        events: {
            onReady: onPlayer1Ready,
            onStateChange: onPlayer1StateChange,
        },
        });

        player2 = new YT.Player('player2', {
        height: '1280',
        width: '720',
        videoId: 'af8yqwVbaO0',
        playerVars: {
            controls: 0,
            enablejsapi: 1,
            modestbranding: 1,
            disablekb: 0,
            rel: 0, // Disable related videos
            iv_load_policy: 3, // Disable annotations
            autoplay: 1,
            loop: 1,
            mute: 1,
            start: 4, // Start playing from 0:03
            showinfo: 0,
            hd: 1,
        },
        events: {
            onReady: onPlayer2Ready,
            onStateChange: onPlayer2StateChange,
        },
        });
    }

    function onPlayer1Ready(event) {
        // Set up time intervals for player 1
        var intervals = [
            { start: 4, end: 6 },
            { start: 12, end: 15 },
            { start: 96, end: 116 },
        ];

        var currentInterval = 0;

        function playNextInterval() {
        var interval = intervals[currentInterval];
        player1.seekTo(interval.start);
        player1.playVideo();
        setTimeout(function() {
            player1.pauseVideo();
            currentInterval = (currentInterval + 1) % intervals.length;
            playNextInterval();
        }, (interval.end - interval.start) * 1000);
        }

        // Play the first interval for player 1
        playNextInterval();
    }

    function onPlayer1StateChange(event) {
        // Remove overlays when player 1 is paused
        if (event.data === YT.PlayerState.PAUSED) {
        player1.getOptions('playerVars').modestbranding = 1;
        }
    }

    function onPlayer2Ready(event) {
        // Set up time intervals for player 2
        var intervals = [
            { start: 22, end: 27 },
            { start: 32, end: 34 },
            { start: 40, end: 48 },
            { start: 64, end: 67 },
        // Add more intervals as needed
        ];

        var currentInterval = 0;

        function playNextInterval() {
        var interval = intervals[currentInterval];
        player2.seekTo(interval.start);
        player2.playVideo();
        setTimeout(function() {
            player2.pauseVideo();
            currentInterval = (currentInterval + 1) % intervals.length;
            playNextInterval();
        }, (interval.end - interval.start) * 1000);
        }

        // Play the first interval for player 2
        playNextInterval();
    }

    function onPlayer2StateChange(event) {
        // Remove overlays when player 2 is paused
        if (event.data === YT.PlayerState.PAUSED) {
        player2.getOptions('playerVars').modestbranding = 1;
        }
    }
    


    // Animate numbers
    $(window).scroll(function() {
        if ($('.counter-section').length) {
          var counterSectionOffset = $('.counter-section').offset().top;
          var windowHeight = $(window).height();
          var scrollPosition = $(window).scrollTop();
      
          if (scrollPosition > counterSectionOffset - windowHeight + 200) {
            // Check if the counters have already animated
            if ($('#counter1').text() === '0') {
              // Counter animation starts
              $('#counter1').prop('Counter', 0).animate({
                Counter: 1500
              }, {
                duration: 2000,
                easing: 'swing',
                step: function(now) {
                  $(this).text(Math.ceil(now));
                  // Calculate the percentage of counter progress
                  var percentage = (now / 1500) * 100;
                  // Set the width of the .counter-fill element accordingly
                  $('.counter-fill-1').css('width', percentage + '%');
                },
                complete: function() {
                  $(this).text('+1500'); // Set the final value
                  $('.counter-fill-1').css('width', '100%'); // Set the width to full
                }
              });
      
              // Similar animation for the other counters...
              $('#counter2').prop('Counter', 0).animate({
                Counter: 500
              }, {
                duration: 2000,
                easing: 'swing',
                step: function(now) {
                  $(this).text(Math.ceil(now));
                  var percentage = (now / 500) * 100;
                  $('.counter-fill-2').css('width', percentage + '%');
                },
                complete: function() {
                  $(this).text('+500');
                  $('.counter-fill-2').css('width', '100%');
                }
              });
      
              var currentYear = new Date().getFullYear();
              var years = currentYear - 1975;
      
              $('#counter3').prop('Counter', 0).animate({
                Counter: years
              }, {
                duration: 2000,
                easing: 'swing',
                step: function(now) {
                  $(this).text(Math.ceil(now));
                  var percentage = (now / years) * 100;
                  $('.counter-fill-3').css('width', percentage + '%');
                },
                complete: function() {
                  $(this).text(years);
                  $('.counter-fill-3').css('width', '100%');
                }
              });
            }
          } else {
            // Reset counters and width
            $('#counter1').text('0').siblings('.counter-fill-1').css('width', '0');
            $('#counter2').text('0').siblings('.counter-fill-2').css('width', '0');
            $('#counter3').text('0').siblings('.counter-fill-3').css('width', '0');
          }
        }
      });
      
      // Function to debounce the scroll event
      function debounce(func, delay) {
        let timeout;
        return function() {
          clearTimeout(timeout);
          timeout = setTimeout(func, delay);
        };
      }
      
      $(window).scroll(debounce(function() {
        var footerOffset = $('#footer').offset().top;
        var windowHeight = $(window).height();
        var scrollPosition = $(window).scrollTop();
      
        if (scrollPosition > footerOffset - windowHeight) {
          // User has scrolled to the "footer" div
          $('#footer').addClass('slide-right');
          $('#footer').css({ opacity: 1 });
        } else {
          // User has scrolled away from the "footer" div
          setTimeout(function() {
            $('#footer').css({ opacity: 0 });
            $('#footer').removeClass('slide-right');
          }, 200); // Wait for 200 milliseconds before removing the class
        }
      }, 200));
      
  
      
      /// PRODUCTS PAGE
      $(document).ready(function() {
        if ($('#divA').length) {


            var divA = $('#divA');
            var divB = $('#divB');
            var divC = $('#divC');
            var btnIndustrias = $('#btnIndustrias');
            var btnProductos = $('#btnProductos');
            var btnSoluciones = $('#btnSoluciones');

            btnIndustrias.on('click', function() {
                divB.stop().fadeOut(150, function() {
                    divC.stop().fadeOut(0);
                    divA.stop().fadeIn(150);
                });

                // Toggle active class on buttons
                btnIndustrias.addClass('active');
                btnProductos.removeClass('active');
                btnSoluciones.removeClass('active');
            });

            btnProductos.on('click', function() {
                divA.stop().fadeOut(150, function() {
                    divC.stop().fadeOut(0);
                    divB.stop().fadeIn(150);
                });

                // Toggle active class on buttons
                btnIndustrias.removeClass('active');
                btnProductos.addClass('active');
                btnSoluciones.removeClass('active');
            });

            btnSoluciones.on('click', function() {
                divA.stop().fadeOut(150, function() {
                    divB.stop().fadeOut(0);
                    divC.stop().fadeIn(0);
                });

                // Toggle active class on buttons
                btnSoluciones.addClass('active');
                btnIndustrias.removeClass('active');
                btnProductos.removeClass('active');
            });
        }



        


        // scroll for mobile
        $(window).on('scroll', function() {
            if ($('#divA').length) {
                var windowHeight = $(window).height();
                var scrollTop = $(window).scrollTop();
                var viewportTop = scrollTop + windowHeight;
                var viewportBottom = scrollTop + windowHeight / 2

                $('.list-group, .card, .badge').each(function() {
                    var elementOffset = $(this).offset().top;

                    if (elementOffset < viewportTop && elementOffset > viewportBottom) {
                        $(this).delay(20000).removeClass('touch');
                    } else {
                        $(this).delay(20000).addClass('touch');
                    }
                });
            }
        });



        if ($('#divA').length) {
            
            // Preload images
            $('.card').each(function() {
                var imageSrc = $(this).attr('data');
                var img = new Image();
                img.src = imageSrc;
            });

            // Mouseenter event handler
            $('.card').on('mouseenter', function() {
                var imageSrc = $(this).attr('data');
                setTimeout(function() {
                    $('#productos_img_wrapper').removeClass('hide_this');
                    $('#productos_img_wrapper').addClass('show_this');
                    $('#productos_img').attr('src', imageSrc);
                }, 500);
            });

            // Mouseleave event handler
            $('.card').on('mouseleave', function() {
                setTimeout(function() {
                    $('#productos_img_wrapper').removeClass('show_this');
                    $('#productos_img_wrapper').addClass('hide_this');
                }, 200);
            });


            $(window).scroll(function() {
                var talkSectionOffset = $('#talk_wrap').offset().top;
                var windowHeight = $(window).height();
                var scrollPosition = $(window).scrollTop();
                var isTalkSectionVisible = $(window).height() + $(window).scrollTop() > $('#talk_wrap').offset().top;
              
                if (isTalkSectionVisible) {
                  // Disable pointer events for #products
                  $('#products').css('pointer-events', 'none');
                  $('#productos_img_wrapper').removeClass('show_this');
                  $('#productos_img_wrapper').addClass('hide_this');
                } else {
                  // Enable pointer events for #products
                  $('#products').css('pointer-events', 'all');
                }
              });





        }
        
            // DROPDOWN MENU
            // Enable dropdown on mouseover
            $('.nav-item.dropdown').mouseover(function() {
                $(this).addClass('show');
                $(this).children('.dropdown-menu').addClass('show');
            }).mouseout(function() {
                $(this).removeClass('show');
                $(this).children('.dropdown-menu').removeClass('show');
            });
            
            // Disable click event for dropdown toggle
            $('.nav-item.dropdown > .nav-link.dropdown-toggle').click(function() {
                return false;
            });












    
    
    
    
    
const minPerSlide = $('#industries').length && !$('.no-slide').length ? 6 : 2;
const items = document.querySelectorAll('.carousel .carousel-item');

items.forEach((el) => {
    let next = el.nextElementSibling;
    for (let i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0];
        }
        el.appendChild(next.cloneNode(true).children[0]);
        next = next.nextElementSibling;
    }
});
            

if ($('#industries').length) {
    // BEHAVIOR

    // Variable to keep track of .card-link hover
    let cardLinkHovered = false;
    // Variable to track the click state
    let isClicked = false;
    // Variable to track if a transition is ongoing
    let isTransitioning = false;

    // Function to reset all cards
    function resetAllCards() {
        $(".carousel-item .card").removeClass("hovered clicked");
        $(".carousel-item .card-img").show();
        $(".carousel-item .card-link").show();
    }

    // Function to reset the click state after a delay
    function resetClickState() {
        setTimeout(() => {
            isClicked = false;
            isTransitioning = false;
        }, 500); // Adjust the delay (in milliseconds) as needed
    }

    // Add event listener for mouseenter on carousel items
    $(".carousel-item .card").mouseenter(function() {
        
        if (!isClicked && !isTransitioning) {
            resetAllCards();
            $(this).addClass("hovered");
            $(this).find(".card-link a").addClass("trigger");
        }
    }).mouseleave(function() {

        if (!isClicked && !isTransitioning) {
            $(this).find(".card-link a").removeClass("trigger");
            setTimeout(() => {
                $(this).find(".card-img").show();
            }, 180);

            setTimeout(() => {
                $(".carousel-item .card").removeClass("clicked");
            }, 230);

            setTimeout(() => {
                $(this).find(".card-link").show();
            }, 300);

            $(this).removeClass("hovered");
        }

        if (!$(this).hasClass("clicked")) {
            $(".carousel-item .card-img").show();
        }
        $(".carousel-item .card-link").show();
    });

    // Add click event handler for carousel items
    $(".carousel-item .card").click(function() {
        if (!isClicked && !isTransitioning) {
            isClicked = true;
            isTransitioning = true;
            $(".carousel-item .card-img").show();
            $(".carousel-item .card-link").show();
            
            setTimeout(() => {
                if ($(this).hasClass("clicked")) {
                    $(this).find(".card-img").hide();
                    $(this).find(".card-link").hide();
                    isTransitioning = false;
                  }
            }, 100);

            $(".carousel-item .card").removeClass("clicked");
            $(this).addClass("clicked");
            resetClickState();
        }
    });

    // Event listener for .card-link mouseover
    $(".card-link a").mouseover(function() {
        if (isClicked) {
            // Prevent triggering the mouseover if clicked
            return;
        }
        cardLinkHovered = true;
    });

    // Check for any card with the class "hovered"
    // If found, reset all cards
    setInterval(function() {
        if ($(".carousel-item .card.hovered").length > 0) {
            resetAllCards();
        }
    }, 100);


    // Handler to reset card state if mouse hovers over carousel control arrows
  $(".carousel-control-prev, .carousel-control-next").mouseenter(function () {
    resetAllCards();
  });
    
    
  if ($('#talk_img_back').length) {
    
  const $backgroundImage = $("#talk_img_back");
  let isAnimationDone = false;

  function resetAnimation() {
    isAnimationDone = false;
    $backgroundImage.css("left", "-100%");
  }

  function animateBackgroundImage() {
    if (!isAnimationDone && $(window).scrollTop() > 0) { // Check if the user has scrolled down
      $backgroundImage.css("left", "0"); /* Slide the image to the left */
      isAnimationDone = true;
    }
  }

  $(window).scroll(function () {
    if ($(window).scrollTop() === 0) {
      resetAnimation();
    } else {
      animateBackgroundImage();
    }
  });
}
    
     
let isAnimating = false;

      // Function to start the animation when the page loads
      function startAnimation() {
        if (isAnimating) return;
        isAnimating = true;

        var overlay = $('#transition-overlay');
        var content = $('#content');
        var logo = $('#logo');

        if (!overlay.hasClass('transition-overlay-internal')) {
          logo.fadeIn('fast');
        }

        content.addClass('visible');
        logo.addClass('anima');

        setTimeout(function() {
          logo.fadeOut('fast', function() {
            overlay.removeClass('transition-overlay-on');
            overlay.addClass('transition-overlay-off');
            $("#full-content").show();
            $('body').removeClass("main");

            // Add the "fade-up" class to elements with the class "#hero__content .translate"
            $("#hero__content .translate").addClass("fade-up");
          });
        }, 1000);
      }

      // Call the startAnimation function after a certain delay (adjust as needed)
      setTimeout(startAnimation, 400);

      $(".navbar a").on("click", function(event) {
        // Prevent the default link action
        event.preventDefault();

        // Change the class of "transition-overlay" to "transition-overlay-on"
        $("#transition-overlay").removeClass("transition-overlay-off").addClass("transition-overlay-on");
        $("#transition-overlay").addClass("transition-overlay-internal");

        // Delay for 2 seconds and then continue with the link action
        setTimeout(function() {
          window.location.href = event.currentTarget.href;
        }, 500);
      });



} 

            


    
    // // SLIDER TALK
    // document.addEventListener("DOMContentLoaded", function () {
    //     const backgroundImage = document.getElementById("talk_img_back");
    //     let isAnimationDone = false;
      
    //     function resetAnimation() {
    //       isAnimationDone = false;
    //       backgroundImage.style.left = "-100%";
    //     }
      
    //     function animateBackgroundImage() {
    //       if (!isAnimationDone && window.scrollY > 0) { // Check if the user has scrolled down
    //         backgroundImage.style.left = "0"; /* Slide the image to the left */
    //         isAnimationDone = true;
    //       }
    //     }
      
    //     window.addEventListener("scroll", function () {
    //       if (window.scrollY === 0) {
    //         resetAnimation();
    //       } else {
    //         animateBackgroundImage();
    //       }
    //     });
    //   });
  

            
    });
      
      
      