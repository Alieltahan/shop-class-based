import { Component } from 'react';
import ProductDescription from '../../ProductDescription/ProductDescription';
import { withRouter } from '../../lib/WithHOC/ReactRouter/WithRouter';

class PDP extends Component {
  render() {
    const ProductId = this.props.location.pathname.slice(9);
    return <ProductDescription productId={ProductId} />;
  }
}

export default withRouter(PDP);
