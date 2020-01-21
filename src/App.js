import React from 'react';
import { useSelector } from 'react-redux';
import createRouter from './routes';
import NavigationServices from './services/navigation';

export default function App() {
  const signed = useSelector(state => state.auth.signed);
  const Routes = createRouter(signed);

  function registerService(ref) {
    NavigationServices.setTopLevelNavigator(ref);
  }
  return <Routes ref={registerService} />;
}
