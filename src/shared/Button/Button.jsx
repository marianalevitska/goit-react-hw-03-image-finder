import PropTypes from 'prop-types';
import stl from './button.module.css';

function Button() {
    return (
        <div>
            <button className={stl.button}></button>
        </div>
    )
}

export default Button;