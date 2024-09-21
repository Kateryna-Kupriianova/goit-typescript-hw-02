import css from './ImageModal.module.css'
import Modal from 'react-modal';
import { Image } from '../../types';




interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image | null;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    border: 'none',
    background: '#1e1e1e',
    maxWidth: '90%', 
    maxHeight: '90%',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

Modal.setAppElement('#root'); 

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, image }) => {
    if (!image) return null;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
        <div className={css.modalImageContainer}>
            <img className={css.modalImageCard}
                src={image.urls.regular}
                alt={image.alt_description}
              />
            <div className={css.dataImage}>
               <h2>{image.description || image.alt_description || 'No Description'}</h2>
               <p><strong>Author:</strong> {image.user.name}</p>
               <p><strong>Likes:</strong> {image.likes}</p>    
                  
            </div>
        </div>
    </Modal>
  );
};

export default ImageModal;
