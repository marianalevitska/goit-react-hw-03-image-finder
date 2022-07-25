import { Component } from 'react';
import PropTypes from 'prop-types';
import stl from './modal.module.css';

class Modal extends Component {
    render() {
        return (
            <div className={stl.modal}></div>
        )
    }
}

export default Modal;