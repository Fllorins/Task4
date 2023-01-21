// сounter
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