import { Component } from 'react';
import { graphql } from 'react-apollo';
import { compose } from 'redux';
import { QUERY_SPECIFIC_CATEGORY_PRODUCTS } from '../../http/graphql';
import { withRouter } from '../../lib/WithHOC/ReactRouter/WithRouter';
import Loader from '../../Loader/loader';
import Products from '../../Products/Products';

class SpecificCategory extends Component {
  render() {
    if (this.props.data.loading) return <Loader />;
    return <Products products={this.props.data.category.products} />;
  }
}

export default compose(
  withRouter,
  graphql(QUERY_SPECIFIC_CATEGORY_PRODUCTS, {
    options: (props) => {
      return {
        variables: { category: props.category },
      };
    },
  })
)(SpecificCategory);
