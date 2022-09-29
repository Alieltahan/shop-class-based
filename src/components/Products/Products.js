import { Component } from 'react';
import { CategoryNameStyle, ProductsContainer } from './Products.styles';
import ProductCard from '../ProductCard/ProductCard';
import { withRouter } from '../lib/WithHOC/ReactRouter/WithRouter';
import { compose } from 'redux';
import Filter from '../Filter/Filter';
import { getFilteredProducts } from '../lib/HelperFns';
import { WithForm } from '../lib/WithHOC/withForm/WithForm';

class Products extends Component {
  state = {
    filteredProducts: [],
  };
  componentDidMount() {
    const result = {};
    this.props.searchParam.forEach((value, key) =>
      value !== '' && value ? (result[key] = value) : null
    );
    const co = this.props.searchParam.getAll('Color');
    // if Colors exist in SearchParams, we assign it.
    if (co.length) result.Color = [...co];
    if (Object.keys(result).length !== 0) {
      this.props.onLoadInitInputs(result);
      const filtered = getFilteredProducts(this.props.products, result);
      this.setState({ filteredProducts: filtered });
    } else this.setState({ filteredProducts: this.props.products });
  }
  handleFilterInputChange() {
    const { inputs, products } = this.props;
    if (Object.keys(inputs).length !== 0) {
      return getFilteredProducts(products, inputs);
    } else {
      return products;
    }
  }
  render() {
    let currentPath = this.props.location.pathname;
    if (currentPath === '/') currentPath = '/all';
    return (
      <>
        <CategoryNameStyle>{currentPath.slice(1)}</CategoryNameStyle>
        <Filter
          onReset={this.onReset}
          products={this.props.products}
          inputs={this.props.inputs}
          handleChange={this.props.handleChange}
          handleFilterColors={this.props.handleFilterColors}
        />
        <ProductsContainer>
          <ProductCard products={this.handleFilterInputChange()} />
        </ProductsContainer>
      </>
    );
  }

  onReset = () => {
    this.props.resetForm();
  };
}

export default compose(withRouter, WithForm)(Products);
