import React, { Fragment } from 'react';

/* ReactFragment permite no añadir más elementos al DOM (evita agregar elementos de más).
Se puede utilizar también <>element</>. */

const NotFound = () => (
  <Fragment>
    <h1>Página no encontrada</h1>
  </Fragment>
);

export default NotFound;
