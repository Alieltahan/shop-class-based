import { Component } from 'react';
import { CategoryNameStyle, ProductsContainer } from './Products.styles';
import ProductCard from '../ProductCard/ProductCard';
import { withRouter } from '../lib/WithHOC/ReactRouter/WithRouter';
import { compose } from 'redux';
import Filter from '../Filter/Filter';
import { getFilteredProducts } from '../lib/HelperFns';
import toast from 'react-hot-toast';

class Products extends Component {
  state = {
    filteredProducts: [],
  };
  componentDidMount() {
    const result = {};
    this.props.searchParam.forEach((value, key) =>
      value !== '' ? (result[key] = value) : null
    );
    if (Object.keys(result).length !== 0) {
      const filtered = getFilteredProducts(this.props.products, result);
      this.setState({ filteredProducts: filtered });
    } else this.setState({ filteredProducts: this.props.products });
  }

  render() {
    // this.setState({ products: this.props.products });
    let currentPath = this.props.location.pathname;
    if (currentPath === '/') currentPath = '/all';

    return (
      <>
        <CategoryNameStyle>{currentPath.slice(1)}</CategoryNameStyle>
        <Filter
          onSubmit={this.onSubmit}
          onReset={this.onReset}
          products={this.props.products}
        />
        <ProductsContainer>
          <ProductCard products={this.state.filteredProducts} />
        </ProductsContainer>
      </>
    );
  }

  onSubmit = (inputs) => {
    // Validating inputs based on:
    //  1- Empty values.
    //  2- Empty Object with no keys.
    const selectedAttributes = {};
    Object.keys(inputs).filter((k) =>
      inputs[k] !== '' ? (selectedAttributes[k] = inputs[k]) : null
    );
    if (Object.keys(selectedAttributes).length === 0) {
      this.setState({ filteredProducts: this.props.products });
      this.props.onSearchParams({});
      return toast.error(`Please select at least 1 filter option`);
    }
    this.props.onSearchParams(selectedAttributes);
    const filtered = getFilteredProducts(
      this.props.products,
      selectedAttributes
    );

    this.setState({ filteredProducts: filtered });
  };
  onReset = () => {
    this.setState({ filteredProducts: this.props.products });
  };
}

export default compose(withRouter)(Products);
