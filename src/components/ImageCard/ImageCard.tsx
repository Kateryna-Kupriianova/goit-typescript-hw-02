import css from './ImageCard.module.css'
const ImageCard = ({ src, alt }) => {
  return (
    <div className={css.imageContainer}>
      <img className={css.imageCard} src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
