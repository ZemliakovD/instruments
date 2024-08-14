$(function () {

    $('.tools-category').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev arrow-right"></button>',
        nextArrow: '<button type="button" class="slick-next arrow-left"></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });


    $('.review-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    $('.brands-list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev arrow-right"></button>',
        nextArrow: '<button type="button" class="slick-next arrow-left"></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

});

    // Получаем все карточки с классом "card"
    const cards = document.querySelectorAll('.rubric-card');

    // Преобразуем NodeList в массив для удобства работы
    const cardsArray = Array.from(cards);
    
    // Сортируем массив карточек по тексту в заголовке h3 (по умолчанию в алфавитном порядке)
    cardsArray.sort((a, b) => {
        const titleA = a.querySelector('h3').textContent.trim().toUpperCase();
        const titleB = b.querySelector('h3').textContent.trim().toUpperCase();
        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    });
    
    // Очищаем родительский контейнер (предположим, что карточки находятся в элементе с id="card-container")
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    
    // Вставляем отсортированные карточки обратно в контейнер
    cardsArray.forEach(card => {
        cardContainer.appendChild(card);
    });