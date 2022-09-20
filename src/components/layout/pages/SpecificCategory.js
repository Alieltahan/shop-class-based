import { Component } from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { QUERY_SPECIFIC_CATEGORY_PRODUCTS } from '../../http/graphql';
import { withRouter } from '../../lib/WithHOC/ReactRouter/WithRouter';
import Loader from '../../Loader/loader';
import Products from '../../Products/Products';
import { routeCategory } from '../../store/activeCategory';

class SpecificCategory extends Component {
  render() {
    const { pathname } = this.props.location;
    this.props.updateCategoryRoute(pathname);
    if (this.props.data.loading) return <Loader />;
    return <Products products={this.props.data.category.products} />;
  }
}

const mapStateToProps = (state) => ({
  activeCategory: state.activeCategory.activeCategory,
});
const mapDispatchToProps = (dispatch) => ({
  updateCategoryRoute: (path) => dispatch(routeCategory(path)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  graphql(QUERY_SPECIFIC_CATEGORY_PRODUCTS, {
    options: (props) => {
      return {
        variables: { category: props.category },
      };
    },
  })
)(SpecificCategory);
