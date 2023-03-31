import PropTypes from 'prop-types';

function ImageGalleryItem({ image, openModal }) {
  return (
    <li className="gallery-item ImageGalleryItem">
      <img
        src={image.webformatURL}
        className="ImageGalleryItem-image "
        alt={image.tags}
        name={image.largeImageURL}
        data-large={image.largeImageURL}
      />
    </li>
  );
}

export default ImageGalleryItem;
