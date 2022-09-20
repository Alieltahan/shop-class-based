import styled from 'styled-components';

// Currency & Arrow Wrapper
export const WrapperCcyArrowStyle = styled.div`
  position: static;
  width: 3.8rem;
  height: 2.9rem;
  left: 12.4rem;
  top: 0.55rem;
  z-index: 10;
  cursor: pointer;
  & > img {
    transition: all 0.3s;
    &.rotate {
      transform: rotate(180deg);
    }
  }
`;

// CCy Symbol Frame
export const SymbolFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 0 1rem;
  position: absolute;
  width: 3.2rem;
  height: 2.9rem;
  left: 12.4rem;
  top: 0.55rem;
`;
export const CcyStyle = styled.span`
  z-index: 10;
  .li_container {
    /* width: 114px;
    height: 45px; */
    display: flex;
    align-items: center;
  }
  span {
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 160%;
    color: var(--c-black);
    display: flex;
    align-items: flex-end;
  }
  img {
    position: absolute;
    width: 0.6rem;
    height: 0.3rem;
    left: 15.6rem;
    bottom: 1.6rem;
  }
`;
export const CcySwitcherStyle = styled.div`
  background-color: var(--c-white);
  position: fixed;
  list-style: none;
  top: 8rem;
  right: 9rem;
  display: grid;
  width: 11.4rem;
  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
  box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 8px;
  /* To Enable Transition has to identify the height */
  height: auto;
  transition: all 0.3s;
  z-index: 3;
  &.collapse {
    height: 0;
    visibility: none;
    overflow: hidden;
  }
  .list {
    padding-left: 3.2rem;
    padding-top: 1.23rem;
    height: 4.5rem;
    width: 11.4rem;
    cursor: pointer;
    /* padding: 1.05rem 4rem 0rem 2rem; */
    &:hover {
      background-color: #eeeeee;
    }
    &:first-of-type {
      margin-top: 1rem;
    }
    &:last-of-type {
      margin-bottom: 1rem;
    }
  }
`;
