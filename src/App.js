import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/layout/Main';

import { Toaster } from 'react-hot-toast';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
  --c-text: #1D1F22;
  --c-white: #FFFFFF;
  --c-primary: #5ECE7B;
  --c-black: #1D1F22;
  --c-info-variant: #B4D2F4;
  --price-regular-font: Raleway;
  --product-card-box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  /* given Shadow box effect  */
  /* --product-card-box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19); */
  --button-box-shadow: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
}
 *,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  //defines the rem! 1 rem = 10 px
  font-size: 62.5%;
  scroll-behavior: smooth;
  transition: all 0.3s;
}

body {
  transition: inherit;
  scroll-behavior: inherit;
  box-sizing: border-box;
}

::selection {
  background-color: #04066b;
  color: white;
}

a,
a:link:active:hover {
  text-decoration: none;
}
a:visited, a {
  color: var(--c-text);
  > div{
    color: inherit;
  }
}

img {
  width: 100%;
}

// Typography
body {
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5 {
  line-height: 1.1;
}
h1 {
  font-size: 6rem;
}
h2 {
  font-size: 5rem;
}
h3 {
  font-size: 4rem;
}
h4 {
  font-size: 3rem;
}

.active{
    color: var(--c-primary);
    border-bottom: 2px solid var(--c-primary);
    > div{
      color: var(--c-primary);
    }
  }
  .EUR:before {
    content: '\u20AC';
  }
  .USD:before {
    content: '\u0024';
  }
  .GBP:before {
    content: '£';
  }
  .RUB:before {
    content: '₽';
  }
  .JPY:before {
    content: '¥';
  }
  /* For Scability, Just add className with Currency Symbol & Add It To The CONST Symbol */
  .AUD:before {
    content: 'A$';
  }
  .selected{
    background-color: #000;
    color: white;
    &-mini{
      background-color: #fff;
      opacity: 0.5;
      color: #000;
    }
  }
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <GlobalStyles />
        <Main />
        <Toaster />
      </BrowserRouter>
    );
  }
}

export default App;
