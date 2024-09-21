
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { Image } from '../../types';

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}


const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <ul className={css.list}>
      {images.map(image => (
        <li className={css.item} key={image.id} onClick={() => onImageClick(image)}>
          <ImageCard src={image.urls.small} alt={image.alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
