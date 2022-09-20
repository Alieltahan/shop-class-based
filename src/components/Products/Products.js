import { Component } from 'react';
import { CategoryNameStyle, ProductsContainer } from './Products.styles';
import ProductCard from '../ProductCard/ProductCard';
import { withRouter } from '../lib/WithHOC/ReactRouter/WithRouter';
import { compose } from 'redux';

class Products extends Component {
  render() {
    let currentPath = this.props.location.pathname;
    if (currentPath === '/') currentPath = '/all';
    return (
      <>
        <CategoryNameStyle>{currentPath.slice(1)}</CategoryNameStyle>
        <ProductsContainer>
          <ProductCard products={this.props.products} />
        </ProductsContainer>
      </>
    );
  }
}

export default compose(withRouter)(Products);
