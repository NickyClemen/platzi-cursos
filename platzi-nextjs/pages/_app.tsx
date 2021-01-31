import { AppProps } from 'next/app'
import 'semantic-ui-css/semantic.min.css'
import '../global.css'

import CartProvider from '@store/Cart'

const MyApp = ({ Component, pageProps }: AppProps) => {
  /* Providers - Context
    Custom themes
    Aplicar layouts
    Aditional props
    Aditional layout
    Manejar errores - componentDidCatch
  */
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
