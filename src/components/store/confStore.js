import reducer from './RootReducer';
import { configureStore } from '@reduxjs/toolkit';

export default function store() {
  const initStoreObj = localStorage.getItem('ecom')
    ? JSON.parse(localStorage.getItem('ecom'))
    : {};

  return configureStore({
    reducer,
    preloadedState: initStoreObj,
  });
}
