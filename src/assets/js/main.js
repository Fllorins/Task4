/* slider */
$('.customers-sliders').slick({
  arrows: true,
  dots: false,
  adaptiveHeight: true,

  // infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 600,
  draggable: true,
  swipe: true,
  appendArrows: $('.content-arrows'),
  prevArrow: '<img src="./assets/images/greater-left.svg">',
  nextArrow: '<img src="./assets/images/greater-right.svg">',
});

/* сounter */
const counter = document.querySelectorAll('.counter');
counter.forEach((counter) => {
  counter.innerHTML = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    if (c < target) {
      counter.innerText = c + 1;
      setInterval(updateCounter, 150);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

/* rating star */

('use strict');

const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
  initRatings();
}

function initRatings() {
  let ratingActive, ratingValue;
  for (let i = 0; i < ratings.length; i++) {
    const rating = ratings[i];
    initRating(rating);
  }

  function initRating(rating) {
    initRatingVars(rating);

    setRatingActiveWidth();

    if (rating.classList.contains('rating_set')) {
      setRating(rating);
    }
  }

  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating__active');
    ratingValue = rating.querySelector('.rating__value');
  }

  function setRatingActiveWidth(i = ratingValue.innerHTML) {
    const ratingActiveWidth = i / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }

  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating__item');
    for (let i = 0; i < ratingItems.length; i++) {
      const ratingItem = ratingItems[i];
      ratingItem.addEventListener('mouseenter', function (e) {
        initRatingVars(rating);

        setRatingActiveWidth(ratingItem.value);
      });
      ratingItem.addEventListener('mouseleave', function (e) {
        setRatingActiveWidth();
      });
      ratingItem.addEventListener('click', function (e) {
        initRatingVars(rating);

        if (rating.dataset.ajax) {
          setRatingValue(ratingItem.value, rating);
        } else {
          ratingValue.innerHTML = i + 1;
          setRatingActiveWidth();
        }
      });
    }
  }
}
