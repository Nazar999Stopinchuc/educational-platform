const typing = (field) => {
  const out = document.querySelector(field);
  let str = out.textContent.trim();

  out.textContent = '';

  let position = 0;

  function typeText() {
    if (position === str.length) return;

    out.textContent += str[position];
    position++;

    setTimeout(typeText, getRandomNumber());
  }

  function getRandomNumber(min = 40, max = 250) {
    return Math.floor(Math.random() * (max + 1 - min));
  }

  typeText();
}

export default typing;