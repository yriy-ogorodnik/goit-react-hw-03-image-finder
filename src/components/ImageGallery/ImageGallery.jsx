import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import propTypes from 'prop-types';

export const ImageGallery = ({ images, onImageClick }) => (
  <ul className="gallery ImageGallery">
    {images.map((image, index) => (
      <ImageGalleryItem onclick={onImageClick} image={image} key={index} />
    ))}
  </ul>
);

 ImageGallery.propTypes = {
   images: propTypes.arrayOf(
     propTypes.shape({
       id: propTypes.number.isRequired,
     })
   ),
   // onImageClick: propTypes.func.isRequired,
 };
