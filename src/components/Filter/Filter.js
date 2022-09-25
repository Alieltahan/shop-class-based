import { Component } from 'react';
import { compose } from 'redux';
import CheckBox from '../common/Checkbox/Checkbox';
import { getUniqueArray } from '../lib/HelperFns';
import { withRouter } from '../lib/WithHOC/ReactRouter/WithRouter';
import { WithForm } from '../lib/WithHOC/withForm/WithForm';
import './Filter.scss';

class Filter extends Component {
  state = {
    productsAttributes: {},
  };
  componentDidMount() {
    this.getAllAttributes();
  }
  // function to get All Attributes from all the products and set the state.
  getAllAttributes() {
    const Attributes = {};
    this.props.products.map((p) =>
      p.attributes.forEach((at) => {
        let property = at.name.split(' ').join('_');
        if (!Attributes[property]) {
          Attributes[property] = [];
        }
        Attributes[property].push(...at.items.map((v) => v.value));
        // to remove duplicated values in the Array.
        Attributes[property] = getUniqueArray(Attributes[property]);
      })
    );

    this.setState({ productsAttributes: { ...Attributes } });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { inputs, onSubmit } = this.props;
    onSubmit(inputs);
  };

  handleResetFilter = () => {
    this.props.resetForm();
    this.props.onSearchParams({});
    this.props.onReset();
  };
  /**
   * @param {Object.key} k Object Key of attributes.
   * @returns select Html element
   */
  renderSelectElements = (k) => (
    <select
      className="attribute-select"
      onChange={this.props.handleChange}
      name={k}
      id={k}
    >
      <option value=""></option>
      {this.state.productsAttributes[k].map((v) => {
        return (
          <option name={k} key={v} value={v}>
            {v}
          </option>
        );
      })}
    </select>
  );

  /**
   * @param {Object.key} k Object Key of attributes.
   * @returns HTML element as Color Boxes
   */
  renderColorBoxes = (k) => {
    return this.state.productsAttributes[k].map((v) => {
      return (
        <span
          name={k}
          value={v}
          onClick={() => this.props.handleFilterColors(v)}
          key={v}
          className={
            this.props.inputs[k] === v
              ? 'color__box attribute-selectedColor '
              : 'color__box'
          }
          style={{ backgroundColor: `${v}` }}
        />
      );
    });
  };

  renderCheckBox = (k) => {
    return (
      <CheckBox
        onChange={this.props.handleChange}
        onInput={this.props.inputs}
        name={k}
      />
    );
  };

  /**
   * @param {Object} inputs Form inputs
   * @returns form btns
   */
  renderFormBtns = (inputs) => {
    return (
      <div className="form__btn-container">
        <button
          className="form__btn"
          type="submit"
          value="submit"
          disabled={Object.keys(inputs).length === 0}
        >
          Filter
        </button>
        <button
          className="form__btn form__btn-reset"
          type="reset"
          onClick={this.handleResetFilter}
        >
          Reset
        </button>
      </div>
    );
  };

  render() {
    const { inputs } = this.props;
    const { productsAttributes } = this.state;

    return (
      <div className="filter__container">
        <form className="form" onSubmit={this.handleSubmit} method="POST">
          <legend>
            <strong>Filter Products</strong>
          </legend>
          {Object.keys(productsAttributes).map((k) => {
            return (
              <div className="attribute-key" key={k}>
                <label>{k.split('_').join(' ')} : </label>
                {k === 'Color'
                  ? this.renderColorBoxes(k)
                  : productsAttributes[k][0].toLowerCase() === 'yes' ||
                    productsAttributes[k][0].toLowerCase() === 'no'
                  ? this.renderCheckBox(k)
                  : this.renderSelectElements(k)}
              </div>
            );
          })}
          {this.renderFormBtns(inputs)}
        </form>
      </div>
    );
  }
}

export default compose(withRouter, WithForm)(Filter);
