$(document).ready(function () {

    $('.reviews__slider').on(`init reInit`, function (event, slick) {
        $('.slick-slide-num-current').text(1 + ' ');
    })
    $('.reviews__slider').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
        $('.slick-slide-num-current').text((currentSlide + 1) + ' ');
    })
    $('.reviews__slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        adaptiveHeight: true,
        easing: 'ease',
        appendArrows: '.slick__arrows',
        prevArrow: '<span class="slick-prev"><</span>',
        nextArrow: '<span class="slick-next">></span>'

    });
    
    $('.partners__slider-1').slick({
        arrows: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        easing: 'ease',
        autoplay: true,
        pauseOnFocus: true,
        autoplaySpeed: 2500,
        speed: 1500,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
                variableWidth: true,
            }
        }],
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                centerMode: false,
                variableWidth: true,
            }
        }],
    });

    $('.partners__slider-2').slick({
        arrows: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 2,
        easing: 'ease',
        autoplay: true,
        pauseOnFocus: true,
        autoplaySpeed: 2700,
        speed: 2000,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                focusOnSelect: true,
                variableWidth: true
            }
        }],
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                centerMode: false,
                variableWidth: true,
            }
        }],
    });
  });

  
  let names = document.getElementById("InputName");
  let phone = document.getElementById("InputPhone");
  let email = document.getElementById("InputEmail");
  let msg = document.getElementById("Textarea");
  let cb = document.getElementById("Check");

  $(function () {
    $(".ajaxForm").submit(function (e) {
      e.preventDefault();
      var href = $(this).attr("action");
      $.ajax({
        type: "POST",
        dataType: "json",
        url: href,
        data: $(this).serialize(),
        success: function (response) {
          if (response.status === "success" && (cb.checked == true)) {
            alert("Успешно!");
            names.value = localStorage.getItem("Имя");
            phone
            email.value = localStorage.getItem("Почта");
            msg.value = localStorage.getItem("Сообщение");
            cb.checked = false;
          } else {
            alert("Ошибка! " + response.message);
          }
        }
      });
    });
  });


