import { Component } from 'react';
import logo from '../../media/svg/logo.svg';
import cartlogo from '../../media/svg/cart.svg';
import {
  CartCurrencyWrapper,
  CartStyle,
  HeaderCategoryStyles,
  HeaderStyles,
  LogoStyle,
} from './Navbar.styles';
import Currencies from '../Currencies/Currencies';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from '../lib/WithHOC/ReactRouter/WithRouter';
import MiniCart from '../MiniCart/MiniCart';
import { miniCartToggle } from '../store/cart';

class Navbar extends Component {
  renderCompanyLogo() {
    return (
      <LogoStyle>
        <img src={logo} alt="logo" />
      </LogoStyle>
    );
  }
  // Cart & Currencies
  renderCartnCurrency() {
    return (
      <CartCurrencyWrapper>
        {/* Curencies */}
        <Currencies currencies={this.props.currencies} />
        {/* Cart */}
        <CartStyle onClick={() => this.props.miniCartToggle()}>
          <img alt="cart logo" className="cart" src={cartlogo} />
          {this.props.cart.totalCount ? (
            <div className="count">{this.props.cart.totalCount}</div>
          ) : (
            ''
          )}
        </CartStyle>
      </CartCurrencyWrapper>
    );
  }

  // Categories
  renderCategories() {
    return (
      <>
        <HeaderStyles>
          {this.props.categories.map((cat) => (
            <NavLink key={cat.name} to={cat?.name === 'all' ? '/' : cat?.name}>
              <HeaderCategoryStyles>{cat?.name}</HeaderCategoryStyles>
            </NavLink>
          ))}
        </HeaderStyles>
        <MiniCart />
      </>
    );
  }
  render() {
    return (
      <>
        {this.renderCategories()}
        {this.renderCompanyLogo()}
        {this.renderCartnCurrency()}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});
const mapDispatchToProps = (dispatch) => ({
  miniCartToggle: () => dispatch(miniCartToggle()),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Navbar);
