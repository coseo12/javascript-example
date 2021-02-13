addEventListener('load', () => {
  const vertical = document.querySelector('.vertical');
  const horizontal = document.querySelector('.horizontal');
  const target = document.querySelector('.target');
  const tag = document.querySelector('.tag');
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener('mousemove', event => {
    const x = event.clientX;
    const y = event.clientY;
    const targetX = x - targetHalfWidth;
    const targetY = y - targetHalfHeight;

    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${targetX}px, ${targetY}px)`;
    tag.style.transform = `translate(${x}px, ${y}px)`;
    tag.innerHTML = `${x}px, ${y}px`;
  });
});
