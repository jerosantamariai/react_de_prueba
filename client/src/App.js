import React, { useContext } from 'react'
import injectContext from './store/appContext';
import { Context } from './store/appContext';

function App() {

  const { store, actions } = useContext(Context);

  return (
    <div>
      <h1>Módulo de Pruebas para APIs</h1>
    </div>
  );
}

export default injectContext(App);
