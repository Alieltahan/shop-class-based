import { Component } from 'react';
import { CategoryNameStyle, ProductsContainer } from './Products.styles';
import ProductCard from '../ProductCard/ProductCard';
import { withRouter } from '../lib/WithHOC/ReactRouter/WithRouter';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { routeCategory } from '../store/activeCategory';

class Products extends Component {
  render() {
    const currentPath = this.props.location.pathname;
    if (currentPath === '/') this.props.routeCategory('/all');
    return (
      <>
        <CategoryNameStyle>
          {this.props.activeCategory?.slice(1)}
        </CategoryNameStyle>
        <ProductsContainer>
          <ProductCard products={this.props.products} />
        </ProductsContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  activeCategory: state.activeCategory.activeCategory,
});
const mapDispatchToProps = (dispatch) => ({
  routeCategory: (path) => dispatch(routeCategory(path)),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Products);
