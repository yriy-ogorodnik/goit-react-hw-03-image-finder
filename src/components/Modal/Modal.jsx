import css from './Modal.module.css';
import propTypes from 'prop-types';

const Modal = ({ onClose, currentImageUrl }) => (
  <div className={css.Overlay} onClick={onClose}>
    <div className={css.Modal}>
      <img src={currentImageUrl} alt="imge" />
    </div>
  </div>
);

Modal.propTypes = {
  currentImageUrl: propTypes.string.isRequired,
  onClose: propTypes.func.isRequired,
};

export default Modal;
