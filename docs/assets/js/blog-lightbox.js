document.addEventListener('DOMContentLoaded', function () {
  var article = document.querySelector('.blog-article');
  if (!article) return;

  var lightbox = document.createElement('div');
  lightbox.className = 'image-lightbox';
  lightbox.innerHTML = '<button type="button" aria-label="Fermer">&times;</button><img alt="">';
  document.body.appendChild(lightbox);

  var lightboxImage = lightbox.querySelector('img');
  var closeButton = lightbox.querySelector('button');

  article.addEventListener('click', function (event) {
    var image = event.target.closest('img');
    if (!image) return;

    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt || '';
    lightbox.classList.add('is-open');
  });

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightboxImage.removeAttribute('src');
  }

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (event) {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeLightbox();
  });
});
