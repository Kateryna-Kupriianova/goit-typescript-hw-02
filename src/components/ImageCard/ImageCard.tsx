import css from './ImageCard.module.css'

interface ImageCardProps {
  src: string;
  alt: string;
}
const ImageCard: React.FC<ImageCardProps> = ({ src, alt}) => {
  return (
    <div className={css.imageContainer}>
      <img className={css.imageCard} src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
