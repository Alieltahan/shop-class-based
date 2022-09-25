import { Component } from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { QUERY_PRODUCT_ATTRIBUTES } from '../http/graphql';
import Loader from '../Loader/loader';
import { cartOverlayClose } from '../store/cart';
import './ProductAttributes.scss';

class ProductAttributes extends Component {
  render() {
    if (this.props.data.loading) return <Loader />;
    const { product } = this.props.data;
    const { productOptionSelected, handleAttributes } = this.props;
    return (
      <div className="product__details__attribute">
        {product?.attributes.map((att) => (
          <div key={att.id}>
            <p className="product__details__attribute-text">{att.id}:</p>
            {this.renderProductAttributes(
              att,
              handleAttributes,
              product,
              productOptionSelected
            )}
          </div>
        ))}
      </div>
    );
  }

  /**
   * @param {Object} att Attributes Object
   * @param {Function} handleAttributes Handles attributes Change
   * @param {Object} product
   * @param {Array} productOptionSelected Array of Objects for selected Attributes
   * @returns
   */
  renderProductAttributes(
    att,
    handleAttributes,
    product,
    productOptionSelected
  ) {
    return att.type !== 'swatch'
      ? att.items.map((option2) => (
          <span
            onClick={() => handleAttributes(product?.id, att, option2)}
            key={option2.id}
            className={this.getSelectedAttributesClasses(
              productOptionSelected,
              product,
              att,
              option2
            )}
          >
            <p>{option2.value}</p>
          </span>
        ))
      : att.items.map((option) => (
          <span
            onClick={() => {
              handleAttributes(product.id, att, option);
            }}
            key={option.id}
            style={{ backgroundColor: `${option.value}` }}
            className={
              productOptionSelected
                .filter((prod) => prod.id === product.id)
                .map((prodSlctd) =>
                  prodSlctd.attributes.filter(
                    (slctdAtt) => slctdAtt?.id === att.id
                  )
                )
                .some((slctdOption) => slctdOption[0]?.option === option.id)
                ? 'product__details__attribute-boxes product__details__attribute-boxes-color product__details__attribute-boxes-slctdColor'
                : 'product__details__attribute-boxes product__details__attribute-boxes-color'
            }
          ></span>
        ));
  }

  /**
   * @param {Array} productOptionSelected Array of Objects for selected Attributes
   * @param {Object} product
   * @param {Array} att Attributes array of the project.
   * @param {Object} option2 Object of Attributes Items.
   * @returns classes based on selected attributes of the product.
   */
  getSelectedAttributesClasses(productOptionSelected, product, att, option2) {
    return productOptionSelected
      .filter((prod) => prod.id === product?.id)
      .map((slctd) =>
        slctd.attributes.filter((slctdAtt) => slctdAtt?.id === att.id)
      )
      .some((opt) => opt[0]?.option === option2.id)
      ? 'product__details__attribute-boxes product__details__attribute-boxes-slctd'
      : 'product__details__attribute-boxes';
  }
}

const mapStateToProps = (state) => ({
  currency: state.ccy,
  cartOverlay: state.cart.cartOverlay,
});
const mapDispatchToProps = (dispatch) => ({
  cartOverlayClose: () => dispatch(cartOverlayClose()),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(QUERY_PRODUCT_ATTRIBUTES, {
    options: (props) => {
      return {
        variables: { id: props.id },
        fetchPolicy: 'no-cache',
      };
    },
  })
)(ProductAttributes);
