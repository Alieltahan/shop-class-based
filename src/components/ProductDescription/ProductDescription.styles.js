import styled from 'styled-components';

export const ProductContainer = styled.div`
  padding-top: 16rem;
  display: grid;
  grid-template-columns: 8rem 100.2rem;
  column-gap: 4rem;
  margin-left: 9.671rem;
  .product {
    &__details {
      &-btn {
        margin-top: 2rem;
        background-color: #5ece7b;
        display: flex;
        justify-content: center;
        padding: 1.6rem 3.2rem;
        width: 100%;
        text-transform: uppercase;
        color: var(--c-white);
        font-family: Raleway;
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 120%;
        border: none;
        &:disabled {
          opacity: 0.5;
          &:hover {
            cursor: not-allowed;
            box-shadow: none;
            transform: translateY(0);
          }
        }
        &:hover {
          cursor: pointer;
          transform: translateY(-2px);
          box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
            rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
        }
        &:active {
          transform: translateY(0);
          box-shadow: none;
        }
      }
      &-description {
      }
    }
    &__sideImage- {
      cursor: pointer;
      width: 7.9rem;
      height: 8rem;
      object-fit: contain;
      display: block;
      margin-bottom: 3.239rem;
      &main {
      }
    }
  }
`;
