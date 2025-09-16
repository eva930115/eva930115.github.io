document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.reveal');

  // 先設定延遲
  items.forEach((el, index) => {
    el.style.setProperty('--delay', `${index * 0.1}s`);
  });

  // 下一幀再啟動動畫
  requestAnimationFrame(() => {
    items.forEach(el => el.classList.add('animate'));
  });
});
