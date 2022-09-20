import { Component } from 'react';
import ProductDescription from '../../ProductDescription/ProductDescription';
import { withRouter } from '../../lib/WithHOC/ReactRouter/WithRouter';

class PDP extends Component {
  render() {
    const { id } = this.props.params;
    return <ProductDescription productId={id} />;
  }
}

export default withRouter(PDP);
