import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'

const store = configureStore()
document.getElementsByTagName('body')[0].innerHTML = '<div id="root"></div>';
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

module.hot.accept();
// main();  
// function main() {  
//     const app = document.createElement('div');    
//     document.body.appendChild(app);    
//     render( <Provider store={store}>
//     <App />
//   </Provider>, app); 
// }