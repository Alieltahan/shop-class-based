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
            {att.type !== 'swatch'
              ? att.items.map((option2) => (
                  <span
                    onClick={() => handleAttributes(product?.id, att, option2)}
                    key={option2.id}
                    className={
                      productOptionSelected
                        .filter((prod) => prod.id === product?.id)
                        .map((slctd) =>
                          slctd.attributes.filter(
                            (slctdAtt) => slctdAtt?.id === att.id
                          )
                        )
                        .some((opt) => opt[0]?.option === option2.id)
                        ? 'product__details__attribute-boxes product__details__attribute-boxes-slctd'
                        : 'product__details__attribute-boxes'
                    }
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
                    // data-color={option.value}
                    style={{ backgroundColor: `${option.value}` }}
                    className={
                      productOptionSelected
                        .filter((prod) => prod.id === product.id)
                        .map((prodSlctd) =>
                          prodSlctd.attributes.filter(
                            (slctdAtt) => slctdAtt?.id === att.id
                          )
                        )
                        .some(
                          (slctdOption) => slctdOption[0]?.option === option.id
                        )
                        ? 'product__details__attribute-boxes product__details__attribute-boxes-color product__details__attribute-boxes-slctdColor'
                        : 'product__details__attribute-boxes product__details__attribute-boxes-color'
                    }
                  ></span>
                ))}
          </div>
        ))}
      </div>
    );
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
