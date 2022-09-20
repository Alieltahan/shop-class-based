import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Cart from '../Cart/Cart';
import { withRouter } from '../lib/WithHOC/ReactRouter/WithRouter';
import Modal from '../Modal/Modal';
import { decrementProduct, miniCartToggle } from '../store/cart';
import { Container } from './MiniCart.styles';

class MiniCart extends Component {
  render() {
    // console.log(this.props, `MINI `);
    const { totalCount } = this.props.cart;
    return (
      <Modal
        open={this.props.miniCartOpen}
        onClose={() => this.props.miniCartToggle()}
      >
        <div className="miniCart">
          {this.props.miniCartOpen && (
            <Container>
              <header>
                <span>My Bag</span>, {totalCount} item{totalCount > 1 && 's'}
              </header>
              {/* default option is true */}
              <Cart mini />
            </Container>
          )}
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.ccy.label,
  miniCartOpen: state.cart.miniCartOpen,
});
const mapDispatchToProps = (dispatch) => ({
  decrementProduct: (product, currency) =>
    dispatch(decrementProduct({ ...product, currency })),
  miniCartToggle: () => dispatch(miniCartToggle()),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(MiniCart);
