import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import propTypes from 'prop-types';

export const ImageGallery = ({ images, openModal }) => (
  <ul className="gallery ImageGallery">
    {images.map((image, index) => (
      <ImageGalleryItem openModal={openModal} image={image} key={index} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: propTypes.arrayOf(),
  openModal: propTypes.func.isRequired,
};
