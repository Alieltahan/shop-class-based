import styled from 'styled-components';

export const ProductContainerStyle = styled.div`
  position: static;
  top: 0;
  left: 0;
  background-color: wheat;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.6rem;
  width: 38.6rem;
  height: 44.4rem;
  background-color: var(--c-white);
  &:hover {
    box-shadow: var(--product-card-box-shadow);
    & .product__image-container-carticon {
      cursor: pointer;
      opacity: 1;
      z-index: 5;
    }
  }
  .product {
    position: relative;

    &__outOfStock {
      cursor: pointer;
      position: absolute;
      height: 42.4rem;
      width: 100%;
      background-color: #ffffff;
      opacity: 0.5;
      &-hide {
        display: none;
        visibility: hidden;
      }
      p {
        font-family: Raleway;
        font-weight: 400;
        font-size: 2.4rem;
        line-height: 3.84rem;
        color: #8d8f9a;
        height: 33.8rem;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    &__attributes {
      position: absolute;
      top: 4rem;
      border-radius: 50%;
      padding: 1rem;
      background-color: #eee;
      &-container {
        background-color: #ccc;
        position: absolute;
        height: 100%;
        width: 50%;
      }
    }
    &__image {
      &-container {
        position: static;
        width: 35.4rem;
        height: 33.8rem;
        left: 1.6rem;
        top: 1.6rem;
        img {
          cursor: pointer;
          position: static;
          left: 1.6rem;
          top: 1.6rem;
          width: 35.4rem;
          height: 33rem;
          object-fit: contain;
          background-size: 100% 100%;
        }

        &-carticon {
          width: 5.2rem;
          height: 5.2rem;
          background-color: var(--c-primary);
          position: absolute;
          right: 1.5rem;
          bottom: -1.6rem;
          border-radius: 50%;
          transition: all 0.3s;
          opacity: 0;
          z-index: 2;
          &:hover {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            transform: translateY(-2px);
          }
          img {
            width: 2.4rem;
            height: 2.4rem;
            position: absolute;
            top: 26.92%;
            bottom: 26.92%;
            left: 26.92%;
            right: 26.92%;
          }
        }
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0;
      position: static;
      width: 35.4rem;
      height: 5.8rem;
      left: 1.6rem;
      top: 37rem;
      @media only screen and (max-width: 65.625em) {
        align-items: center;
      }

      p {
        display: flex;
        align-items: center;
        color: var(--c-black);
        font-family: Raleway;
        font-style: normal;
        line-height: 160%;
        font-size: 1.8rem;
        position: static;
        height: 2.9rem;
        left: 0;
        top: 0;
      }
      > div {
        font-family: var(--price-regular-font);
        color: var(--c-black);
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 160%;
        font-style: normal;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0;
        position: static;
        width: 5.8rem;
        height: 2.9rem;
        left: 0;
        top: 2.9rem;
      }
    }
  }
`;
export const Modal = styled.div`
  background-color: #ccc;
  position: fixed;
  top: 8rem;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  opacity: 0.5;
`;
