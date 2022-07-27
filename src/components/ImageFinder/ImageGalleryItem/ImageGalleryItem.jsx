import PropTypes from 'prop-types';
import stl from './imageGalleryItem.module.css';

function ImageGalleryItem({ tags, webformatURL, largeImageURL,onOpen }) {
    return (
        <li className={stl.item} onClick={()=>onOpen({largeImageURL,tags}) }>
            <img src={webformatURL} alt={tags} className={stl.img}  />
        </li>
    )
}

export default ImageGalleryItem;