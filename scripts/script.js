// Interacciones: seleccionar modelo, color, almacenamiento y animación de la imagen principal.

document.addEventListener('DOMContentLoaded', () => {
  const modelCards = document.querySelectorAll('.model-card');
  const swatches = document.querySelectorAll('.swatch');
  const storageCards = document.querySelectorAll('.storage-card');
  const mainPhone = document.getElementById('mainPhone');
  const addBagBtn = document.getElementById('addBag');

  // Helper: crossfade image
  function changeMainImage(src) {
    if (mainPhone.src && mainPhone.src.includes(src)) return;
    mainPhone.classList.add('fade-out');
    setTimeout(() => {
      mainPhone.src = src;
      mainPhone.classList.remove('fade-out');
      mainPhone.classList.add('fade-in');
      setTimeout(()=> mainPhone.classList.remove('fade-in'), 300);
    }, 200);
  }

  // MODELS
  modelCards.forEach(card => {
    card.addEventListener('click', () => {
      modelCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

      // update price text (simple example)
      const price = card.dataset.price || '';
      const priceNode = document.querySelector('.product-price strong');
      if (priceNode) priceNode.textContent = price.replace(/\$/,'$');

      // image change if model has specific image
      const image = card.dataset.image;
      if (image) changeMainImage(image);
    });
  });

  // SWATCHES (colors)
  swatches.forEach(s => {
    s.addEventListener('click', () => {
      swatches.forEach(x => x.classList.remove('selected'));
      s.classList.add('selected');
      // set aria pressed
      swatches.forEach(x => x.setAttribute('aria-pressed', 'false'));
      s.setAttribute('aria-pressed', 'true');

      const img = s.dataset.image;
      if (img) changeMainImage(img);
    });
  });

  storageCards.forEach(card => {
    card.addEventListener('click', () => {
      storageCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });

  // Add to bag - redirect to another HTML
  addBagBtn.addEventListener('click', () => {
    window.location.href = 'Bag.html';
  });

});
