import PropTypes from 'prop-types';

function Button({ onNextFetch }) {
  return (
    <button className="Button" type="button" onClick={onNextFetch}>
      Load more
    </button>
  );
}

Button.prototype = {
  onNextFetch: PropTypes.func.isRequired,
};

export default Button;
