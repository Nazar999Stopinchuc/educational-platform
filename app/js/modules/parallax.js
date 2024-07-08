function parallax(elem, intensity) {
  const container = document.querySelector('.top-screen');
  const elements = document.querySelectorAll(elem);

  container.addEventListener('mousemove', function (e) {
    const mouseX = e.clientX; 
    const mouseY = e.clientY; 

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const offsetX = (mouseX - containerWidth / 2) / containerWidth * intensity;
    const offsetY = (mouseY - containerHeight / 2) / containerHeight * intensity;

    elements.forEach(function (element) {
      element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
  });
}

export default parallax;