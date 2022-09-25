import { Component } from 'react';
import Header from './Header';
import { graphql } from 'react-apollo';
import { QUERY_ALL_PRODUCTS_Categories_Currencies } from '../http/graphql';
import { Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import PLP from './pages/PLP';
import PDP from './pages/PDP';
import SpecificCategory from './pages/SpecificCategory';
import Loader from '../Loader/loader';
import { compose } from 'redux';
import { withRouter } from '../lib/WithHOC/ReactRouter/WithRouter';
import NotFound from '../404/NotFound';

class Main extends Component {
  render() {
    if (this.props.data.loading) return <Loader />;
    return (
      <>
        <Header
          categories={this.props.data?.categories}
          currencies={this.props.data.currencies}
        />
        <Routes>
          <Route path="/:category/:id" element={<PDP />} />
          {this.props.data?.categories.map((category) => (
            <Route
              key={category.name}
              path={`/${category?.name}`}
              element={<SpecificCategory category={`${category?.name}`} />}
            />
          ))}
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/"
            element={<PLP products={this.props.data.category.products} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
  }
}

export default compose(
  graphql(QUERY_ALL_PRODUCTS_Categories_Currencies, {
    options: () => {
      return {
        fetchPolicy: 'no-cache',
      };
    },
  }),
  withRouter
)(Main);
