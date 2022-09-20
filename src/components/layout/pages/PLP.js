import { Component } from 'react';
import Products from '../../Products/Products';

class PLP extends Component {
  render() {
    return <Products products={this.props.products} />;
  }
}

export default PLP;
