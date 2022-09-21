import Modal from '../Modal/Modal';
import './loader.styles.css';

const Loader = () => {
  return (
    <Modal open>
      <div className="container">
        <div className="loader"></div>
      </div>
    </Modal>
  );
};

export default Loader;
