import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from '../lib/WithHOC/ReactRouter/WithRouter';
import { addProduct, decrementProduct, miniCartToggle } from '../store/cart';
import { CartFooter, ContainerStyles } from './Cart.styles';
import ArrowImg from '../../media/svg/ArrowImg.svg';
import { ProductCcyPrice } from '../lib/ProductCcyPrice/ProductCcyPrice';
import { CalculateTax } from '../lib/CalculateTax';

class Cart extends Component {
  state = {
    inputs: {},
  };
  handleNextImg = (product) => {
    const { inputs } = this.state;
    let { id, gallery } = product;
    let [existingItem] = Object.keys(inputs).filter((input) => input === id);
    if (existingItem && gallery.length - 1 > inputs[existingItem])
      this.setState({ inputs: { ...inputs, [id]: inputs[existingItem] + 1 } });
    else {
      this.setState({ inputs: { ...inputs, [id]: 1 } });
    }
  };
  handlePrevImg = (product) => {
    const { inputs } = this.state;
    let currentIds = { ...inputs };
    let { id, gallery } = product;
    let [existingItem] = Object.keys(inputs).filter((input) => input === id);
    if (existingItem && inputs[existingItem] !== 0)
      this.setState({ inputs: { ...inputs, [id]: inputs[existingItem] - 1 } });
    else {
      this.setState({ inputs: { ...currentIds, [id]: gallery.length - 1 } });
    }
  };
  render() {
    const { cart, mini, addProduct, decrementProduct, currency } = this.props;
    return (
      <ContainerStyles>
        {!mini && <header>CART</header>}
        {cart.products.length === 0 ? (
          <h5 className="emptyCart">
            There is no items in your cart yet!, go and grap some!
          </h5>
        ) : (
          <ul className={!mini ? 'u-list' : 'u-list u-list-mini'}>
            {cart.products.map((product, i) => (
              <li
                className={!mini ? 'list' : 'list list-mini'}
                key={`${mini ? product.id : product.id + i}`}
              >
                <div>
                  <span
                    className="item__brand-container"
                    onClick={() => {
                      this.props.navigate(
                        `product/${product.id.split(',')[0]}`
                      );
                      miniCartToggle();
                    }}
                  >
                    <div
                      className={
                        !mini ? 'item__brand' : 'item__brand item__brand-mini '
                      }
                    >
                      {product.brand}
                    </div>
                    <div
                      className={
                        !mini ? 'item__name' : 'item__name item__name-mini'
                      }
                    >
                      {product.name}
                    </div>
                  </span>
                  <div
                    className={
                      !mini ? 'item__price' : 'item__price item__price-mini'
                    }
                  >
                    <p className={currency.label}>
                      {ProductCcyPrice(product.prices, currency.label)}
                    </p>
                  </div>
                  {product.attributes.map((att) => (
                    <div
                      key={att.id}
                      className={
                        !mini ? 'item__att' : 'item__att item__att-mini'
                      }
                    >
                      {att.type === 'swatch'
                        ? att.items.map((option) => (
                            <div
                              key={option.id}
                              style={{
                                backgroundColor: `${option.value}`,
                              }}
                              className={
                                !mini
                                  ? `${
                                      product.selectedOptions[0].attributes.some(
                                        (opt) => opt.option === option.id
                                      )
                                        ? 'item__att-boxes item__att-boxes-colored item__att-boxes-colored-selected'
                                        : 'item__att-boxes item__att-boxes-colored'
                                    }`
                                  : `${
                                      product.selectedOptions[0].attributes.some(
                                        (opt) => opt.option === option.id
                                      )
                                        ? 'item__att-boxes item__att-boxes-colored item__att-boxes-mini item__att-boxes-colored-selected'
                                        : 'item__att-boxes item__att-boxes-colored item__att-boxes-mini item__att-boxes-colored-selected-mini'
                                    }`
                              }
                            ></div>
                          ))
                        : att.items.map((option) => (
                            <span
                              key={option.id}
                              className={
                                !mini
                                  ? `${
                                      product.selectedOptions[0].attributes
                                        .filter((arr) => arr.id === att.id)
                                        .some((opt) => opt.option === option.id)
                                        ? 'item__att-boxes selected '
                                        : 'item__att-boxes'
                                    }`
                                  : `${
                                      product.selectedOptions[0].attributes
                                        .filter((arr) => arr.id === att.id)
                                        .some((opt) => opt.option === option.id)
                                        ? 'item__att-boxes item__att-boxes-mini item__att-boxes-mini selected-mini '
                                        : 'item__att-boxes item__att-boxes-mini'
                                    }`
                              }
                            >
                              <p>{option.value}</p>
                            </span>
                          ))}
                    </div>
                  ))}
                </div>
                <div
                  className={
                    !mini
                      ? 'item__counters-container'
                      : 'item__counters-container item__counters-container-mini'
                  }
                >
                  <div
                    className={
                      !mini
                        ? 'item__counters'
                        : 'item__counters item__counters-mini'
                    }
                  >
                    <div
                      onClick={() =>
                        addProduct({ ...product, currency: currency.label })
                      }
                      className={
                        !mini
                          ? 'item__counters-op'
                          : 'item__counters-op item__counters-op-mini'
                      }
                    >
                      +
                    </div>
                    <div
                      className={
                        !mini
                          ? 'item__counters-count'
                          : 'item__counters-count item__counters-count-mini'
                      }
                    >
                      {product.quantity}
                    </div>
                    <div
                      onClick={() =>
                        decrementProduct({
                          ...product,
                          currency: currency.label,
                        })
                      }
                      className={
                        !mini
                          ? 'item__counters-op'
                          : 'item__counters-op item__counters-op-mini'
                      }
                    >
                      -
                    </div>
                  </div>
                  <div
                    className={!mini ? 'item__img' : 'item__img item__img-mini'}
                  >
                    {/* Rendering the Arrows only if there is more than 1 pic */}
                    {product.gallery.length !== 1 && (
                      <span className="item__img-arrow">
                        <span
                          onClick={() => this.handlePrevImg(product)}
                          className="item__img-arrow-container"
                        >
                          <img
                            src={ArrowImg}
                            className="item__img-arrow-lf"
                            alt="arrow"
                          />
                        </span>
                        <span
                          onClick={() => this.handleNextImg(product)}
                          className="item__img-arrow-container"
                        >
                          <img
                            src={ArrowImg}
                            className="item__img-arrow-rt"
                            alt="arrow"
                          />
                        </span>
                      </span>
                    )}

                    <img
                      src={
                        product.gallery[this.state.inputs[product.id]] ||
                        product.gallery[0]
                      }
                      alt={product.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `${this.handleNextImg(product)}`;
                      }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        {mini && (
          <>
            <div className="footer">
              <div className="footer__total"> Total</div>
              <div className={`footer__amount`}>
                {this.props.currency.symbol}
                {Math.floor(this.props.cart.totalAmount * 100) / 100 || 0}
              </div>
            </div>
            <div className="footer__btns">
              <button
                onClick={() => {
                  this.props.miniCartToggle();
                  this.props.navigate('/cart');
                }}
                type="button"
                className="footer__btn footer__btn-white"
              >
                view bag
              </button>
              <button
                disabled={!this.props.cart.products.length}
                type="button"
                className="footer__btn footer__btn-co-primary"
              >
                checkout
              </button>
            </div>
          </>
        )}
        {!mini && this.props.cart.totalAmount && (
          <CartFooter>
            <p className="cart__info">
              Tax 21%:{' '}
              <span className="numbers">
                {currency.symbol}
                {CalculateTax(21, this.props.cart.totalAmount)}
              </span>
            </p>
            <p className="cart__info">
              Quantity:{' '}
              <span className="numbers">{this.props.cart.totalCount}</span>
            </p>
            <p className="cart__info">
              Total:
              <span className="numbers">
                {currency.symbol}
                {(Math.floor(this.props.cart.totalAmount * 100) / 100).toFixed(
                  2
                ) || 0}
              </span>
            </p>
            <div className="cart__btn">order</div>
          </CartFooter>
        )}
      </ContainerStyles>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.ccy,
});
const mapDispatchToProps = (dispatch) => ({
  miniCartToggle: () => dispatch(miniCartToggle()),
  addProduct: (product, currency) =>
    dispatch(addProduct({ ...product, ...currency })),
  decrementProduct: (product, currency) =>
    dispatch(decrementProduct({ ...product, ...currency })),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Cart);
