// import { useDispatch, useSelector } from 'react-redux';
// import { addProduct, cartOverlayClose, setCartOverlayProd } from './store/cart';
import cartLogo from '../../media/svg/EmptyCart-white.svg';
// import { useNavigate } from 'react-router';
// import { AddToCartChkr } from './common/AddToCartChkr';
// import { ProductAttributesOverlay } from './common/ProdAttributesOverlay';
// import { useForm } from './lib/useForm';
// import { useState } from 'react';
// import { SelectAllAttributes } from './common/SelectAllAttributes';
import { Component } from 'react';
import { ProductContainerStyle } from './ProductCardStyles';
import { withRouter } from '../lib/WithHOC/ReactRouter/WithRouter';

class ProductCard extends Component {
  handleProductDescription = (id) => {
    this.props.navigate(`/product/${id}`);
  };
  render() {
    return (
      <>
        {/* {cartOverlay.isOpen && <Modal onClick={() => handleCloseCartOverlay()} />} */}
        {this.props.products?.map((product) => (
          <ProductContainerStyle key={product.id}>
            <div className="product">
              <div className="product__image-container">
                <div
                  onClick={() => this.handleProductDescription(product.id)}
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
                    // onClick={() => {
                    //   setSelectAttributes(false);
                    //   AddToCartChkr({
                    //     ...product,
                    //     selectedOptions: productOptionSelected,
                    //   })
                    //      ? handleAddToCart(product)
                    //     : handleAddToCartFalse(product);
                    // }}
                    className="product__image-container-carticon"
                  >
                    <img alt="cartLogo" src={cartLogo} />
                  </span>
                )}
                {/* {product.id === cartOverlay.id && cartOverlay.isOpen && (
                  <>
                    {selectAttributes && <SelectAllAttributes />}
                    <ProductAttributesOverlay
                      id={product.id}
                      handleAttributes={handleAttributes}
                      productOptionSelected={productOptionSelected}
                    />
                  </>
                )} */}
                <img
                  onClick={() => this.handleProductDescription(product.id)}
                  src={product.gallery[0]}
                  alt={product.name}
                ></img>
                <div className="product__content">
                  <p>{product.name}</p>
                  <div
                  // className={currency}
                  >
                    {/* {product.prices
                      .filter((price) => price.currency === currency)
                      .map((price) => price.amount.toFixed(2))
                      .join()} */}
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

export default withRouter(ProductCard);
