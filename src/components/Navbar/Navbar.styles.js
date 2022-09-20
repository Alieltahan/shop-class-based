import styled from 'styled-components';

export const HeaderStyles = styled.div`
  display: flex;
  margin-left: 10.1rem;
  height: 8rem;
  position: absolute;
  bottom: 0;
  font-family: Raleway;
  z-index: 3;
  @media only screen and (max-width: 50em) {
    margin-left: 2rem;
  }
`;

export const HeaderCategoryStyles = styled.div`
  display: flex;
  align-items: center;
  font-family: inhert;
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 120%;
  padding: 2.8rem 1.6rem 3.2rem 1.6rem;
  margin-bottom: 2px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid transparent;
`;

export const LogoStyle = styled.div`
  display: flex;
  /* height: 100%; */
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  @media only screen and (max-width: 50em) {
    display: none;
  }

  img {
    justify-content: center;
    width: 3.118rem;
    height: 2.862rem;
  }
`;
export const CartCurrencyWrapper = styled.div`
  position: absolute;
  top: 2.3rem;
  right: 10.1rem;
  width: 20.4rem;
  height: 4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  @media only screen and (max-width: 33.125em) {
    right: 2rem;
  }
  .count {
    position: absolute;
    top: 4.25%;
    right: -6.3%;
    color: #fff;
    width: 2rem;
    height: 2rem;
    border-radius: 6rem;
    background-color: #1d1f22;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const CartStyle = styled.div`
  position: static;
  width: 2rem;
  height: 2rem;
  right: 0;
  top: calc(50% -20px / 2);
  img {
    width: 2rem;
    height: 2rem;
  }
`;
