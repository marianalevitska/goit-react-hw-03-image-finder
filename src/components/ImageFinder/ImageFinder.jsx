import { Component } from "react";
import stl from './imageFinder.module.css';

import ImageGallery from './ImageGallery';
import SearchBar from './SearchBar';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';

class ImageFinder extends Component {
    render() {
        return (
            <div className={stl.block}>
                <SearchBar />
                <ImageGallery />
                <Button />
                <Loader />
                <Modal />
            </div>
        )
    }
}

export default ImageFinder;