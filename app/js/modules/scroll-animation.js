const scrollAnimation = () => {
  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('show-animation');
      };
    });
  };

  let options = {
    threshold: [0.4]
  };

  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');

  for (let elm of elements) {
    observer.observe(elm);
  };
};

export default scrollAnimation;