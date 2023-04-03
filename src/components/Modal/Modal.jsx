import css from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ onClose, currentImageUrl }) => (
  <div className={css.Overlay} onClick={onClose}>
    <div className={css.Modal}>
      <img src={currentImageUrl} alt="imge" />
    </div>
  </div>
);

Modal.propTypes = {
  currentImageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
