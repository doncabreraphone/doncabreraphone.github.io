// Open and Close menu
document.addEventListener("click", function(e) {
    var menu = document.getElementById("menu");
    if (e.target != menu && !menu.contains(e.target)) {
        menu.classList.remove("open");
    } else {
        menu.classList.toggle("open");
    }
});


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



    $(document).ready(function() {
      
        if ($("body").hasClass("open")) {
          setTimeout(function(){
            $("#lg").attr("src", "images/logo_blue.png");
          }, 600);
        }
      
        $("#get-started").on("click", function() {
          if ($("body").hasClass("open")) {
            $("body").removeClass("open");
            $("#lg").attr("src", "images/logo.png");
          } else {
            $("body").addClass("open");
            $('#menu_toggle').removeClass('d-none').addClass('animate__fadeIn');
            setTimeout(function(){
              $("#lg").attr("src", "images/logo_blue.png");
            }, 600);
          }
        });


        $('#menu_toggle').on('click', function(){
            $("#lg").attr("src", "images/logo.png");
            $('body').toggleClass('open');
        });    

      });

