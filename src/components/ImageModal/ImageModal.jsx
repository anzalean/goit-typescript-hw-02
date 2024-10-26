import Modal from 'react-modal';
import styles from './ImageModal.module.css';
Modal.setAppElement('#root');
const ImageModal = ({ image, onClose }) => {
  return (
    <Modal isOpen={true} onRequestClose={onClose} className={styles.modal}>
      <div className={styles.content}>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
    </Modal>
  );
};

export default ImageModal;
