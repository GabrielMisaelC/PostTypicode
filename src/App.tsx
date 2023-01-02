import { Fragment } from 'react';
import GlobalStyle from "./GlobalStyles"
import { AppRoutes } from "./Routes";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <AppRoutes />
    </Fragment>
  )
}
export default App
