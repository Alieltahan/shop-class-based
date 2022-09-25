import ProductAttributes from '../ProductAttributes/ProductAttributes';
import { Component } from 'react';
import { graphql } from 'react-apollo';
import { QUERY_SINGLE_PRODUCT } from '../http/graphql';
import Loader from '../Loader/loader';
import parse from 'html-react-parser';
import { ProductContainer } from './ProductDescription.styles';
import { WithForm } from '../lib/WithHOC/withForm/WithForm';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { AddToCartChkr } from '../lib/HelperFns';
import { addProduct } from '../store/cart';
import { ProductCcyPrice } from '../lib/ProductCcyPrice/ProductCcyPrice';
/**
 * @props {productId} String of Product ID.
 * @props {data.product} Object of Product Details.
 */
class ProductDescription extends Component {
  state = {
    thumbnail: 0,
    selectAttribute: false,
  };

  render() {
    if (this.props.data.loading) return <Loader />;
    const { product } = this.props.data;
    const { handleAttributes, productOptionSelected, activeCurrency } =
      this.props;
    const { thumbnail } = this.state;
    return (
      <ProductContainer>
        <div>{this.renderProductGallery(product)}</div>

        <div className="product__details">
          {this.renderProductThumbnail(product, thumbnail)}
          <div className="product__details__content">
            <h4 className="product__details__brand">{product.brand}</h4>
            <p>{product.name}</p>
            <ProductAttributes
              id={product.id}
              handleAttributes={handleAttributes}
              productOptionSelected={productOptionSelected}
            />
            {this.renderProductPrice(activeCurrency, product)}
            {this.renderProductBtn(product, productOptionSelected)}
            {this.renderValidateSelectAttributes()}
            {renderProductDescription()}
          </div>
        </div>
      </ProductContainer>
    );

    function renderProductDescription() {
      return (
        <div className="product__details-description" id="details">
          {parse(product.description)}
        </div>
      );
    }
  }

  handleImageChange = (index) => {
    this.setState({
      thumbnail: index,
    });
  };
  handleAddToCart = (Product, productOptionSelected) => {
    this.props.addProduct({
      ...Product,
      /* Making a unique ID for each product based on the attributes combined so user can get quantity of each specific attributes. */
      id: `${Product.id},${productOptionSelected[0]?.attributes
        .map((opt) => Object.values(opt))
        .join('-')}`,
      selectedOptions: productOptionSelected,
      currency: this.props.activeCurrency,
      quantity: 1,
    });

    this.props.clearProductAtt();
  };

  renderValidateSelectAttributes() {
    return (
      this.state.selectAttribute && (
        <div className="product__details-att">
          !Please select all available options for the product!
        </div>
      )
    );
  }

  renderProductBtn(product, productOptionSelected) {
    return (
      <div>
        <button
          disabled={!product.inStock}
          onClick={() => {
            this.setState({ selectAttribute: false });
            AddToCartChkr({
              ...product,
              selectedOptions: productOptionSelected,
            })
              ? this.handleAddToCart(product, productOptionSelected)
              : this.setState({ selectAttribute: true });
          }}
          className="product__details-btn"
        >
          {!product.inStock ? 'out of stock' : 'add to cart'}
        </button>
      </div>
    );
  }

  renderProductPrice(activeCurrency, product) {
    return (
      <div className="product__details__attribute-price">
        <p>price:</p>
        <div>
          <p className={activeCurrency}>
            {ProductCcyPrice(product.prices, activeCurrency).toFixed(2)}
          </p>
        </div>
      </div>
    );
  }

  renderProductThumbnail(product, thumbnail) {
    return (
      product?.gallery && (
        <img
          src={product.gallery[thumbnail]}
          className="product__image-main"
          alt={`product pic ${thumbnail + 1}`}
        />
      )
    );
  }

  renderProductGallery(product) {
    return product.gallery?.map((image, index) => (
      <img
        onClick={() => this.handleImageChange(index)}
        className={`product__sideImage- product__sideImage-${index}`}
        key={`${image}` + index}
        src={image}
        alt={`${product.name} pic ${index}`}
      />
    ));
  }
}

const mapStateToProps = (state) => ({
  activeCurrency: state.ccy.label,
});
const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product)),
});

export default compose(
  graphql(QUERY_SINGLE_PRODUCT, {
    options: (props) => {
      return {
        variables: { id: props.productId },
      };
    },
  }),
  WithForm,
  connect(mapStateToProps, mapDispatchToProps)
)(ProductDescription);
