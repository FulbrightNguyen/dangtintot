// Hamburger Menu
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }

$(document).ready(function(){
	
  // Mouse Enter for Slider Image
  $('.wrapper-featured').mouseenter(function(){
$(this).find('.wrapper-featured-content').show();
  }).mouseleave(function(){
$(this).find('.wrapper-featured-content').hide();
  });

  // Sidr Menu
        $('#simple-menu').sidr({
        timing: 'ease-in-out',
        side: 'right'
      });
  // Remove Class
  $( "#sidr ul" ).removeClass( "nav" )

  // Responsive Menu
  $('.responsive-menu').on('click', function(e) {
    e.preventDefault();
    $('.mobile-menu').slideToggle();
    //console.log ('Work');
  });  

// Append Instagram with Background
$("ul.lightwidget li.in-tile").append('<div class="www"></div>');

// Append Search Button at Menu for Dekstop
$( ".main-nav .nav" ).append( "<li class='search-button'><a href='#'><span class='icon-search'></span></a></li>" );

$( ".main-nav .nav" ).append( "<div class='search-form'><form><input id='search-field' type='search' name='s' placeholder='Search' size='15'></form></div>" );
$('.search-button').click(function(){
    $('.search-form').slideToggle( "normal" );
    setTimeout(function(){
      $('.search-form input').focus();
    }, 300);
  });

// Search
$("#search-field").ghostHunter({
  results   : "#results",
  onKeyUp         : true,
  info_template   : "",
  result_template : "<a href='{{link}}'><h2>{{title}}</h2></a>{{description}}"
});


$('.autoplay').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
{
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
});

}); //document.ready

$( window ).resize(function () {
      $.sidr('close', 'sidr');
    });

// Typed.js
    $(function(){

        $("#typed").typed({
            // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
            stringsElement: $('#typed-strings'),
            typeSpeed: 100,
            backDelay: 1000,
            loop: true,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
           // callback: function(){ foo(); },
            //resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });

    });
