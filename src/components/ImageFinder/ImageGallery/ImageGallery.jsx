import PropTypes from 'prop-types';
import stl from './imageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

function ImageGallery({ img,onOpen }) {
    const elements = img.map(({ id, webformatURL, largeImageURL, tags }) =>
        <ImageGalleryItem
            key={id}
            tags={tags}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onOpen={onOpen}
        />
    )


    return (
        <ul className={stl.gallery}>{elements}</ul>
    )

}

export default ImageGallery; 