import React, { useContext } from 'react'
import injectContext, { Context } from '../../../clinipay/client/src/content/appContext';

function App() {

  const { store, actions } = useContext(Context);

  return (
    <div>
      <h1>Módulo de Pruebas para APIs</h1>
    </div>
  );
}

export default injectContext(App);
