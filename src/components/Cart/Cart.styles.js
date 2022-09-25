import styled from 'styled-components';

export const ContainerStyles = styled.div`
  .emptyCart {
    text-align: center;
    margin: 3rem 0;
  }
  header {
    padding-top: 16rem;
    font-family: Raleway;
    font-size: 3.2rem;
    font-weight: bold;
    line-height: 4rem;
    margin-left: 10rem;
  }
  .u-list {
    width: 109.7rem;
    margin: 5.9rem 0 3rem 10rem;
    position: relative;
    display: flex;
    flex-direction: column;
    &-mini {
      /* position: fixed; */
      width: 29.5rem;
      max-height: 31.5rem;
      overflow: auto;
      margin: 2.3rem 0;
    }
  }
  .list {
    font-family: Raleway;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    list-style: none;
    border-top: 1px solid #000;
    width: 109.8rem;
    padding-top: 2rem;
    font-family: Raleway;
    font-size: 3rem;
    line-height: 2.7rem;
    &-mini {
      width: 29.3rem;
      border-top: 0;
      margin: 0 0 4.1rem 0;
      padding-top: 0;
      min-height: auto;
      > div {
        width: 13.6rem;
      }
    }
    .item {
      &__img {
        width: 14.1rem;
        display: flex;
        align-items: center;
        position: relative;
        &-mini {
          width: 13.7rem;
        }
        &-arrow {
          /* height: 100%; */

          z-index: 2;
          position: absolute;

          width: 7.2rem;
          display: flex;
          justify-content: end;
          align-items: center;
          bottom: 1.6rem;
          right: 1.6rem;
          gap: 0.8rem;
          > img {
            height: 2rem;
            width: 2rem;
          }
          &-container {
            background-color: rgba(0, 0, 0, 0.73);

            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 3;
            height: 2.4rem;
            width: 2.4rem;
            cursor: pointer;
          }
          &-rt {
            height: 1.124rem;
            width: 0.563rem;
          }
          &-lf {
            height: 1.124rem;
            width: 0.563rem;
            transform: rotate(180deg);
          }
        }
        img {
          object-fit: contain;
        }
      }
      &__counters {
        height: 100%;
        display: flex;
        margin-right: 1.2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        &-mini {
          margin-right: 1rem;
        }
        &-container {
          display: flex;
          align-items: center;
          &-mini {
            max-height: 13.7rem;
          }
        }
        &-count {
          font-weight: 500;
          font-size: 2.4rem;
          text-align: center;
          &-mini {
            font-size: 1.6rem;
          }
        }
        &-op {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 4.5rem;
          height: 4.5rem;
          border: 1px solid #1d1f22;
          &-mini {
            font-size: 1.6rem;
            width: 2.4rem;
            height: 2.4rem;
          }
        }
      }
      &__brand {
        &-container {
          cursor: pointer;
        }
        font-weight: 600;
        height: 2.7rem;
        &-mini {
          font-weight: 300;
          font-size: 1.6rem;
          line-height: 160%;
        }
      }
      &__name {
        margin-top: 3rem;
        font-weight: normal;
        &-mini {
          margin-top: 0;
          font-size: 1.6rem;
        }
      }
      &__price {
        margin-top: 2.6rem;
        font-weight: bold;
        font-size: 2.4rem;
        line-height: 1.8rem;
        color: #1d1f22;
        &-mini {
          margin-top: 0.5rem;
          font-size: 1.6rem;
          font-weight: 500;
          line-height: 2.256rem;
        }
      }
      &__att {
        margin-top: 2.6rem;
        display: flex;
        &-mini {
          flex-wrap: wrap;
        }
        &-boxes {
          width: 6.3rem;
          height: 4.5rem;
          border: 1px solid #1d1f22;
          margin: 0.8rem 1.2rem 0 0;

          &-colored {
            display: block;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            > div {
              font-size: 1.6rem;
              background-color: var(--c-white);
              border-radius: 50%;
              height: 100%;
            }
            &-selected {
              background-color: #1d1f22;
              border: 1px solid var(--c-primary);
              color: #ffffff;
              opacity: 0.5;
              &-mini {
                background-color: #ffffff;
                color: #1d1f22;
              }
            }
          }
          > p {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            width: 100%;
            height: 100%;
            line-height: 1.8rem;
            font-size: 1.6rem;
            font-weight: normal;
            font-family: 'Source Sans Pro';
            font-style: normal;
          }
          &-mini {
            position: relative;
            width: 2.4rem;
            height: 2.4rem;
            /* due to iPhone 12 pro attributes is too big for the box added padding */
            padding: 0 2rem;
            > p {
              font-size: 1.4rem;
            }
          }
          &-active {
            background-color: #1d1f22;
          }
        }
      }
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;
    align-items: center;
    color: #1d1f22;
    &__total {
      color: inherit;
      font-family: Roboto;
      font-weight: 500;
      line-height: 1.8rem;
      min-width: 5.5rem;
    }
    &__amount {
      color: inherit;
      font-family: Raleway;
      font-weight: bold;
      min-width: 9.5rem;
      text-align: end;
      height: 2.6rem;
    }
    &__btns {
      display: flex;
      justify-content: space-between;
      margin: 3.5rem -0.3rem 2rem -0.3rem;
    }
    &__btn {
      &:disabled {
        background-color: #dddddd;
        color: #1d1f22;
        opacity: 0.5;
        cursor: default;
      }
      cursor: pointer;
      font-family: Raleway;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      width: 14rem;
      height: 4.3rem;
      padding: 1.6rem 3.2rem;
      &-white {
      }
      &-co-primary {
        background-color: var(--c-primary);
        color: white;
      }
    }
  }
`;

export const CartFooter = styled.div`
  font-size: 2.4rem;
  color: #1d1f22;
  font-family: Raleway, sans-serif;
  font-weight: 400;
  line-height: 2.8rem;
  margin: 5.9rem 0 3rem 10rem;
  & > * {
    margin-bottom: 0.8rem;
    &:last-child {
      margin-bottom: 1.6rem;
    }
  }
  .numbers {
    font-weight: 700;
  }
  .cart__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 27.9rem;
    height: 4.3rem;
    font-weight: 600;
    color: #fff;
    font-size: 1.4rem;
    /* padding: 1.3rem 11.55rem; */
    background-color: #5ece7b;
    text-transform: uppercase;
  }
  .cart__info {
    display: grid;
    grid-template-columns: 11rem 1fr;
    max-width: 27.9rem;
  }
`;
