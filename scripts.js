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
    var player3;

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

        player3 = new YT.Player('player3', {
            height: '1280',
            width: '720',
            videoId: 'YYM2N4oyS9s',
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
                onReady: onPlayer3Ready,
                onStateChange: onPlayer3StateChange,
            },
            });
    }

    function onPlayer1Ready(event) {
        // Set up time intervals for player 1
        var intervals = [
            { start: 4, end: 7 },
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
        var intervals = [
            // { start: 22, end: 27 },
            // { start: 32, end: 34 },
            // { start: 40, end: 48 },
            // { start: 64, end: 67 },
            { start: 4, end: 7 },
            { start: 12, end: 15 },
            { start: 21.5, end: 27 },
            { start: 41, end: 45 },
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
    
    // player 3
    function onPlayer3Ready(event) {
        var intervals = [

            { start: 240, end: 255 },
        ];

        var currentInterval = 0;

        function playNextInterval() {
        var interval = intervals[currentInterval];
        player3.seekTo(interval.start);
        player3.playVideo();
        setTimeout(function() {
            player3.pauseVideo();
            currentInterval = (currentInterval + 1) % intervals.length;
            playNextInterval();
        }, (interval.end - interval.start) * 1000);
        }

        // Play the first interval for player 3
        playNextInterval();
    }

    function onPlayer3StateChange(event) {
        // Remove overlays when player 3 is paused
        if (event.data === YT.PlayerState.PAUSED) {
        player3.getOptions('playerVars').modestbranding = 1;
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
                Counter: 180
              }, {
                duration: 2000,
                easing: 'swing',
                step: function(now) {
                  $(this).text(Math.ceil(now));
                  // Calculate the percentage of counter progress
                  var percentage = (now / 180) * 100;
                  // Set the width of the .counter-fill element accordingly
                  $('.counter-fill-1').css('width', percentage + '%');
                },
                complete: function() {
                  $(this).text('+180'); // Set the final value
                  $('.counter-fill-1').css('width', '100%'); // Set the width to full
                }
              });
      
              // Similar animation for the other counters...
              $('#counter2').prop('Counter', 0).animate({
                Counter: 1500
              }, {
                duration: 2000,
                easing: 'swing',
                step: function(now) {
                  $(this).text(Math.ceil(now));
                  var percentage = (now / 1500) * 100;
                  $('.counter-fill-2').css('width', percentage + '%');
                },
                complete: function() {
                  $(this).text('+1500');
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
                  $(this).text('+' + years);
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
      
      document.addEventListener("DOMContentLoaded", function() {
        // Function to handle the scroll event
        function handleScroll() {
            var footer = $('#footer');
    
            if (footer.length === 0) {
                return; // Return if the footer element doesn't exist
            }
    
            var footerOffset = footer.offset().top;
            var windowHeight = $(window).height();
            var scrollPosition = $(window).scrollTop();
    
            if (scrollPosition > footerOffset - windowHeight) {
                // User has scrolled to the "footer" div
                footer.addClass('slide-right');
                footer.css({ opacity: 1 });
            } else {
                // User has scrolled away from the "footer" div
                setTimeout(function() {
                    footer.css({ opacity: 0 });
                    footer.removeClass('slide-right');
                }, 200); // Wait for 200 milliseconds before removing the class
            }
        }
    
        // Attach the scroll event listener after the DOM is fully loaded
        $(window).on('scroll', debounce(handleScroll, 200));
    });
      
  
      
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
        $(document).on('mouseover', '.nav-item.dropdown', function() {
            if (!$("#navbarNav").hasClass('show')) {
                $(this).addClass('show');
                $(this).children('.dropdown-menu').addClass('show');
            }
        }).on('mouseout', '.nav-item.dropdown', function() {
            if (!$("#navbarNav").hasClass('show')) {
                $(this).removeClass('show');
                $(this).children('.dropdown-menu').removeClass('show');
            }
        });
        
        // Disable click event for dropdown toggle
        $(document).on('click', '.nav-item.dropdown > .nav-link.dropdown-toggle', function() {
            return false;
        });












    
    
    
    
if ($('#industries').length) {
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
}
            

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

            // Set a timeout to trigger a click after 1.5 seconds
            hoverTimeout = setTimeout(() => {
                if (!isClicked && !isTransitioning) {
                    $(this).click(); // Simulate a click
                }
            }, 850);
        }
    }).mouseleave(function() {
        clearTimeout(hoverTimeout); 
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

       // Event delegation for navbar link clicks
       $(document).on("click", ".navbar a", function(event) {
        // Check if the link is under #industriesDropdown
        if ($(this).closest("#industriesDropdown").length === 0) {
            // Prevent the default link action
            event.preventDefault();
    
            // Store the href in a variable
            var linkHref = event.currentTarget.href;
    
            // Change the class of "transition-overlay" to "transition-overlay-on"
            $("#transition-overlay").removeClass("transition-overlay-off").addClass("transition-overlay-on");
            $("#transition-overlay").addClass("transition-overlay-internal");
    
            // Delay for 0.5 seconds (500 milliseconds) and then continue with the link action
            setTimeout(function() {
                window.location.href = linkHref;
            }, 500);
        }
    });
    
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
  



    if ($('.image-ticker').length) {
    window.onload = function(){
        var windowWidth = window.innerWidth;
        var elementWidth = 290;
        var numElToAppend = Math.ceil(windowWidth/elementWidth) * 1;
        var parentElSelector = '.image-ticker ul';
        var elSelector = 'li';
        var parentEl = document.querySelector(parentElSelector);
        var itemEls = parentEl.querySelectorAll(elSelector);
        if(numElToAppend > itemEls.length){
          var numElToAppendFraction = numElToAppend/itemEls.length;
          var fullRepeat = ~~numElToAppendFraction;
          var partialRepeat = Math.ceil((numElToAppendFraction-fullRepeat)*10);
        }
        for(var i = 0; i < fullRepeat; i++){
          for(var j = 0; j<itemEls.length;j++){
            parentEl.appendChild(itemEls[j].cloneNode(true));  
          }
        }
        var itemsToAppend = Array.prototype.slice.call(itemEls, 0, partialRepeat);
        for(var i = 0; i< itemsToAppend.length; i++){
        //   console.log(itemsToAppend[i]);
          parentEl.appendChild(itemsToAppend[i].cloneNode(true));
        }
      
      }

    }




    $(window).on("scroll", function() {
        if ($('.slide-up').length) {
            $(".slide-up").each(function(index) {
                const slideDiv = $(this);
                const scrollPosition = $(window).scrollTop();
                const elementPosition = $(this).offset().top;
                if (elementPosition - scrollPosition < $(window).height()) {
                  slideDiv.addClass("active");
                } else {
                  slideDiv.removeClass("active");
                }
              });        
        }

        if ($('.slide-right').length) {
            $(".slide-right").each(function(index) {
                const slideDiv = $(this);
                const scrollPosition = $(window).scrollTop();
                const elementPosition = $(this).offset().top;
                if (elementPosition - scrollPosition < $(window).height()) {
                    setTimeout(() => {
                        slideDiv.addClass("active");
                    }, 700);

                } else {
                  slideDiv.removeClass("active");
                }
              });        
        }

        if ($('.slide-left').length) {
            $(".slide-left").each(function(index) {
                const slideDiv = $(this);
                const scrollPosition = $(window).scrollTop();
                const elementPosition = $(this).offset().top;
                if (elementPosition - scrollPosition < $(window).height()) {
                    
                    setTimeout(() => {
                        slideDiv.addClass("active");
                    }, 700);

                } else {
                  slideDiv.removeClass("active");
                }
              });        
        }

        if ($('.image-container').length) {
            $(".image-container").each(function(index) {
                const slideImage = $(this).find("img");
                const scrollPosition = $(window).scrollTop();
                const elementPosition = $(this).offset().top;
                if (elementPosition - scrollPosition < $(window).height()) {
                slideImage.addClass("active");
                } else {
                slideImage.removeClass("active");
                }
            });
        }
    });


    // /// MENU ITEM INCLUDE + CURRENT
    // function addCurrentClassToMenuItem(currentPageId) {
    //     $('#navbarNav .nav-item').find('[data-key="' + currentPageId + '"]').parent().addClass('current');
    //     $('#navbarNav .nav-item').find('[data-key="' + currentPageId + '"]').addClass('current');
        
    //     if (currentPageClass) {
    //         $('.dropdown-item[data-key="' + currentPageClass + '"]').addClass('current-link');
    //     }
    // }
     
    // // Get the current page ID
    // var currentPageId = $('body').attr('id');
    // var currentPageClass = $('body').attr('class'); // Assuming only one class

    // // Add "current" class to menu items for the initial page load
    // addCurrentClassToMenuItem(currentPageId,currentPageClass);
    

    // // Load menu content dynamically and add "current" class after loading
    // if ($('.include').length) {
    //     fetch("./includes/menu_top.html")
    //     .then(response => {
    //         return response.text();
    //     })
    //     .then(data => {
    //         document.querySelector(".menu_top").innerHTML = data;

    //         // Call the function to add "current" class to the dynamically loaded menu item
    //         addCurrentClassToMenuItem(currentPageId);
    //     });
    // }


function addCurrentClassToMenuItem(currentPageId, currentPageClass) {
    $('#navbarNav .nav-item').find('[data-key="' + currentPageId + '"]').parent().addClass('current');
    $('#navbarNav .nav-item').find('[data-key="' + currentPageId + '"]').addClass('current');

    // Add "current" class to footer menu item
    $('#footer .navbar-nav .nav-item').find('[data-key="' + currentPageId + '"]').addClass('current');
    
    if (currentPageClass) {
        $('.dropdown-item[data-key="' + currentPageClass + '"]').addClass('current-link');
        $('#footer .dropdown-item[data-key="' + currentPageClass + '"]').addClass('current-link');
    }
}

    // Get the current page ID
    var currentPageId = $('body').attr('id');
    var currentPageClass = $('body').attr('class'); // Assuming only one class

    // Add "current" class to menu items for the initial page load
    addCurrentClassToMenuItem(currentPageId, currentPageClass);

    // Load menu content dynamically and add "current" class after loading
    if ($('.include').length) {
        fetch("./includes/menu_top.html")
        .then(response => {
            return response.text();
        })
        .then(data => {
            document.querySelector(".menu_top").innerHTML = data;

            // Call the function to add "current" class to the dynamically loaded menu item
            addCurrentClassToMenuItem(currentPageId, currentPageClass);

            document.querySelector(".form-check-input").addEventListener("change", function() {
                var isChecked = $(this).prop('checked');
                var language = isChecked ? 'en' : 'es'; // Toggle between 'en' and 'es'
                loadLanguageFile(language);
            });

            
        });

        
    }


    $(".navbar-toggler").click(function() {
        $("#navbarNav").toggleClass("show");
        $(".dropdown-menu").toggleClass("show");
        $(this).toggleClass("showing");
        


        $(".menu_top").removeClass("slide-out_2");
        $("#navbarNav.show .dropdown-menu").removeClass("slide-in_2");

        $(".menu_top").removeClass("slide-out");
        $("#navbarNav.show .dropdown-menu").removeClass("slide-in");
        
        if ($("#navbarNav").hasClass("show")) {
              $("#industriesDropdown").on("click", function(event) {
                    $(".menu_top").removeClass("slide-out_2");
                    $("#navbarNav.show .dropdown-menu").removeClass("slide-in_2");

                    $(".menu_top").addClass("slide-out");
                    $("#navbarNav.show .dropdown-menu").addClass("slide-in");
                    event.preventDefault(); 
              });

                $("#back").on("click", function(event) {
                    $(".menu_top").removeClass("slide-out");
                    $("#navbarNav.show .dropdown-menu").removeClass("slide-in");

                    $(".menu_top").addClass("slide-out_2");
                    $("#navbarNav.show .dropdown-menu").addClass("slide-in_2");
                    event.preventDefault(); 
                });
        } 
    });




    
    // Load footer content dynamically
    if ($('.include').length) {
        fetch("./includes/footer.html")
        .then(response => {
            return response.text();
        })
        .then(data => {
            document.querySelector(".footer").innerHTML = data;

            // Call the function to add "current" class to the dynamically loaded menu item
            addCurrentClassToMenuItem(currentPageId, currentPageClass);
        });
    }




    if ($('.parallax-container').length) {

        // We define the parallax text
        const $parallaxText = $(".parallax-text");

        // on scroll we show the parallax
        $(window).on("scroll", function() {
            const scrollY = $(window).scrollTop();
            const translateY = scrollY * -0.3; // Adjust the speed here

            $parallaxText.css("transform", `translateY(${translateY}px)`);
        });

        setTimeout(() => {
            $('.parallax-text h1').addClass('active');
            $('.parallax-text p').addClass('active');
        }, 2200);

    }
    


    if ($('#block__about_wrapper').length) {
        
        
        
        
        const $images = $('.image');
        let currentIndex = 0;
        let isAnimating = false; // Flag to track animation state
        
        function showImage(index) {
          $images.eq(index).addClass('visible').removeClass('hidden');
        }
        
        function hideImage(index) {
          $images.eq(index).addClass('hidden').removeClass('visible');
        }
        
        function changeImage(direction) {
          if (isAnimating) return;
          isAnimating = true;
        
          hideImage(currentIndex);
        
          if (direction === 'next') {
            currentIndex = (currentIndex + 1) % $images.length;
          } else if (direction === 'prev') {
            currentIndex = (currentIndex - 1 + $images.length) % $images.length;
          }
        
          showImage(currentIndex);
        
          setTimeout(function () {
            isAnimating = false;
          }, 800); // Animation duration, adjust as needed
        }
        
        // Show the initial image
        showImage(currentIndex);
        
        // Change images automatically in sequence
        function autoChangeImages() {
          changeImage('next');
          setTimeout(autoChangeImages, 3000); // Change every 3 seconds, adjust as needed
        }
        
        autoChangeImages();



    }



/// PRODUCTS
        // Function to check if an element is in the viewport
        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Function to handle scroll events
        function handleScroll() {
            $(".ul_left, .ul_right").each(function() {
                var element = $(this);
                if (isElementInViewport(element[0])) {
                    element.addClass("pop-in");
                } else {
                    element.removeClass("pop-in");
                }
            });
        }

        // Attach scroll event handler
        $(window).on("scroll", handleScroll);

        // Trigger initial check on page load
        handleScroll();




        /// FORM
        // Update modal content based on the link's data attributes
        $('#formProducts').on('show.bs.modal', function (event) {
            var link = $(event.relatedTarget); // Link that triggered the modal
            var title = link.data('title');    // Extract info from data-* attributes
            var subject = link.data('subject');

            // Update text elements and hidden fields
            $('#emailSubjectText').text(subject);
            $('#emailSubject').val(subject);
        });

        // Handle form submission if needed
        $('#emailForm').submit(function (event) {
            // Add your logic to handle form submission
            event.preventDefault(); // Prevent the default form submission
            // Perform your actions (e.g., send email)
            // Close the modal if needed: $('#formProducts').modal('hide');
        });













});  
      