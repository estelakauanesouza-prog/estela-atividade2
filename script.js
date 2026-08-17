// Rastro Neon Interativo Seguindo o Ponteiro
(function initCursorTrail() {
  const trailCount = 10;
  const dots = [];
  const mouse = { x: 0, y: 0 };

  for (let i = 0; i < trailCount; i++) {
    const dot = document.createElement('div');
    dot.className = 'cursor-trail';
    dot.style.opacity = (1 - i / trailCount).toString();
    dot.style.scale = (1 - (i / trailCount) * 0.6).toString();
    document.body.appendChild(dot);
    dots.push({ element: dot, x: 0, y: 0 });
  }

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function renderTrail() {
    let x = mouse.x;
    let y = mouse.y;

    dots.forEach((dot) => {
      dot.x += (x - dot.x) * 0.3;
      dot.y += (y - dot.y) * 0.3;
      dot.element.style.left = `${dot.x}px`;
      dot.element.style.top = `${dot.y}px`;
      x = dot.x;
      y = dot.y;
    });

    requestAnimationFrame(renderTrail);
  }

  renderTrail();
})();
