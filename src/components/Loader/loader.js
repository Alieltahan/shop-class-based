import { Modal } from '../ProductCard/ProductCardStyles';
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
