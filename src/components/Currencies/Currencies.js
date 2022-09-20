import { Component } from 'react';
import arrow from '../../media/svg/arrow.svg';
import { connect } from 'react-redux';
import { changeTotalCcy } from '../store/cart';
import { toggleSwitcher, updateCcy } from '../store/currency';
import {
  CcyStyle,
  CcySwitcherStyle,
  SpaceStyle,
  SymbolFrame,
  WrapperCcyArrowStyle,
} from './Currencies.styles';
import { compose } from 'redux';
import { withRouter } from '../lib/WithHOC/ReactRouter/WithRouter';
import Modal from '../Modal/Modal';

class Currencies extends Component {
  handleCcyChange = (cc) => {
    const { storeProducts } = this.props;
    this.props.updateCcy(cc);
    this.props.changeTotalCcy({ storeProducts, newCcy: cc.label });
  };
  renderCcySwitcher() {
    return (
      <CcyStyle onClick={() => this.props.toggleSwitcher()}>
        <WrapperCcyArrowStyle>
          <SymbolFrame>
            <span>{this.props.ccy?.symbol}</span>
          </SymbolFrame>
          <img
            className={this.props.ccy.showSwitcher ? 'rotate' : ''}
            alt="currency expand"
            src={arrow}
          ></img>

          <Modal open={this.props.ccy.showSwitcher}>
            <CcySwitcherStyle
              className={this.props.ccy.showSwitcher ? '' : 'collapse'}
            >
              {this.props.currencies.map((cc) => (
                // <div k className="li_container">
                <div
                  className="list"
                  key={cc.label}
                  onClick={() => this.handleCcyChange(cc)}
                >
                  {cc.symbol} {cc.label}
                </div>
                // </div>
              ))}
            </CcySwitcherStyle>
          </Modal>
        </WrapperCcyArrowStyle>
      </CcyStyle>
    );
  }
  render() {
    return this.renderCcySwitcher();
  }
}
const mapStateToProps = (state) => ({
  activeCategory: state.activeCategory.activeCategory,
  ccy: state.ccy,
  storeProducts: state.cart.products,
});
const mapDispatchToProps = (dispatch) => ({
  toggleSwitcher: () => dispatch(toggleSwitcher()),
  updateCcy: (currency) => dispatch(updateCcy(currency)),
  changeTotalCcy: ({ storeProducts, newCcy }) =>
    dispatch(changeTotalCcy({ storeProducts, newCcy })),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Currencies);
