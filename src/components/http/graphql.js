// Container of all GQL Queries.

import { gql } from '@apollo/client';

// Getting the Categories
export const QUERY_CATEGORIES = gql`
  query QUERY_CATEGORIES {
    categories {
      name
    }
  }
`;

// Getting the Currencies
export const QUERY_CURRENCIES = gql`
  query QUERY_CURRENCIES {
    currencies {
      label
      symbol
    }
  }
`;

// Getting Categories & Currencies
// export const QUERY_CATEGORIES_CURRENCY = gql`
//   query QUERY_CATEGORIES_CURRENCY {
// categories {
//   name
// }
// currencies {
//   label
//   symbol
// }
//   }
// `;

// Query All Products of All Categories.
export const QUERY_ALL_PRODUCTS_Categories_Currencies = gql`
  query QUERY_ALL_PRODUCTS_Categories_Currencies {
    categories {
      name
    }
    currencies {
      label
      symbol
    }
    category {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        brand
        prices {
          amount
          currency {
            label
          }
        }
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
      }
    }
  }
`;

// Query All Products with Specific Categories.
export const QUERY_SPECIFIC_CATEGORY_PRODUCTS = gql`
  query QUERY_SPECIFIC_CATEGORY_PRODUCTS($category: String!) {
    category(input: { title: $category }) {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        brand
        prices {
          currency {
            label
          }
          amount
        }
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
      }
    }
  }
`;

// Query Single Product for PDP
export const QUERY_SINGLE_PRODUCT = gql`
  query QUERY_SINGLE_PRODUCT($id: String!) {
    product(id: $id) {
      id
      name
      inStock
      gallery
      description
      category
      brand
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          label
        }
        amount
      }
    }
  }
`;

// Query Product Attributes
export const QUERY_PRODUCT_ATTRIBUTES = gql`
  query QUERY_PRODUCT_ATTRIBUTES($id: String!) {
    product(id: $id) {
      id
      attributes {
        id
        name
        type
        items {
          value
          id
        }
      }
    }
  }
`;
