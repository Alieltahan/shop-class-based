import styled from 'styled-components';

export const CategoryNameStyle = styled.h3`
  font-family: Raleway;
  font-weight: 400;
  font-size: 4.2rem;
  line-height: 160%;
  color: var(--c-text);
  padding-top: 16rem;
  margin-left: 10.1rem;
  text-transform: capitalize;
`;

export const ProductsContainer = styled.div`
  margin: 8.762rem 10.2rem 10rem 10rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 38.6rem);
  column-gap: 4rem;
  row-gap: 10.3rem;
  position: relative;
  padding-left: 25rem;

  @media only screen and (max-width: 65.625em) {
    grid-template-columns: 30rem repeat(auto-fit, minmax(30rem, 1fr));
    justify-items: center;
  }
`;
