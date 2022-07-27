import PropTypes from 'prop-types';
import stl from './button.module.css';

function Button({ onLoad, title }) {
  return (
    <div>
      <button className={stl.button} onClick={onLoad} type="button">
        {title}
      </button>
    </div>
  );
}

export default Button;
