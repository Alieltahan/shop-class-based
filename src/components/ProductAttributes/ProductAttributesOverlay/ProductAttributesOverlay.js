import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ProductAttributes from '../ProductAttributes';
import './ProductAttributesOverlay.scss';

class ProductAttributesOverlay extends Component {
  render() {
    const { handleAttributes, productOptionSelected, id } = this.props;
    return (
      <div className="overlay">
        <ProductAttributes
          handleAttributes={handleAttributes}
          productOptionSelected={productOptionSelected}
          id={id}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currency: state.ccy,
});

export default compose(connect(mapStateToProps))(ProductAttributesOverlay);
