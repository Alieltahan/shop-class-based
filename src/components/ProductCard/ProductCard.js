import cartLogo from '../../media/svg/EmptyCart-white.svg';
import { Component } from 'react';
import { ProductContainerStyle } from './ProductCardStyles';
import { withRouter } from '../lib/WithHOC/ReactRouter/WithRouter';
import { compose } from 'redux';
import { WithForm } from '../lib/WithHOC/withForm/WithForm';
import { AddToCartChkr } from '../lib/AddToCartChkr';
import {
  addProduct,
  cartOverlayClose,
  setCartOverlayProd,
} from '../store/cart';
import { connect } from 'react-redux';
import { SelectAllAttributes } from './SelectAllAttributes/SelectAllAttributes';
import ProductAttributesOverlay from '../ProductAttributes/ProductAttributesOverlay/ProductAttributesOverlay';
import { ProductCcyPrice } from '../lib/ProductCcyPrice/ProductCcyPrice';
import Modal from '../Modal/Modal';

class ProductCard extends Component {
  state = {
    selectAttributes: false,
  };
  handleAddToCart = (product) => {
    this.props.clearProductAtt();

    this.props.addProduct({
      ...product,
      /* Making a unique ID for each product based on the attributes combined so user can get quantity of each specific attributes. */
      id: `${product.id},${this.props.productOptionSelected[0]?.attributes
        .map((opt) => Object.values(opt))
        .join('-')}`,
      selectedOptions: this.props.productOptionSelected,
      currency: this.props.currency.label,
      quantity: 1,
    });

    this.props.cartOverlayClose();
    this.setState({ selectAttributes: false });
  };

  handleProductDescription = (product) => {
    this.props.navigate(`/${product.category}/${product.id}`);
  };

  handleAddToCartFalse = (product) => {
    if (this.props.cartOverlay.isOpen) {
      this.setState({ selectAttributes: true });
    } else {
      this.props.setCartOverlayProd({
        id: product.id,
        isOpen: true,
      });
      this.setState({ selectAttributes: false });
    }
  };

  handleCloseCartOverlay = () => {
    this.props.clearProductAtt();
    this.props.cartOverlayClose();
  };
  render() {
    return (
      <>
        {this.props.cartOverlay.isOpen && (
          <Modal
            open={this.props.cartOverlay.isOpen}
            onClose={this.handleCloseCartOverlay}
          />
        )}
        {this.props.products?.map((product) => (
          <ProductContainerStyle key={product.id}>
            <div className="product">
              <div className="product__image-container">
                <div
                  onClick={() => this.handleProductDescription(product)}
                  className={
                    !product.inStock
                      ? 'product__outOfStock'
                      : 'product__outOfStock-hide'
                  }
                >
                  <p>OUT OF STOCK</p>
                </div>
                {/* Won't render the Cart Icon if Product out of Stock */}
                {product.inStock && (
                  <span
                    onClick={() => {
                      this.setState({ selectAttributes: false });
                      AddToCartChkr({
                        ...product,
                        selectedOptions: this.props.productOptionSelected,
                      })
                        ? this.handleAddToCart(product)
                        : this.handleAddToCartFalse(product);
                    }}
                    className="product__image-container-carticon"
                  >
                    <img alt="cartLogo" src={cartLogo} />
                  </span>
                )}
                {product.id === this.props.cartOverlay.id &&
                  this.props.cartOverlay.isOpen && (
                    <>
                      {this.state.selectAttributes && <SelectAllAttributes />}
                      <ProductAttributesOverlay
                        id={product.id}
                        handleAttributes={this.props.handleAttributes}
                        productOptionSelected={this.props.productOptionSelected}
                      />
                    </>
                  )}
                <img
                  onClick={() => this.handleProductDescription(product)}
                  src={product.gallery[0]}
                  alt={product.name}
                ></img>
                <div className="product__content">
                  <p>{product.name}</p>
                  <div
                  // className={currency}
                  >
                    {this.props.currency.symbol}
                    {ProductCcyPrice(product.prices, this.props.currency.label)}
                  </div>
                </div>
              </div>
            </div>
          </ProductContainerStyle>
        ))}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  currency: state.ccy,
  cartOverlay: state.cart.cartOverlay,
});
const mapDispatchToProps = (dispatch) => ({
  // miniCartToggle: () => dispatch(miniCartToggle()),
  cartOverlayClose: () => dispatch(cartOverlayClose()),
  addProduct: (product, id, selectedOptions, currency, quantity) =>
    dispatch(addProduct({ ...product, ...id, ...currency, ...quantity })),
  setCartOverlayProd: (id, isOpen) => dispatch(setCartOverlayProd(id, isOpen)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  WithForm
)(ProductCard);
