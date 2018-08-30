import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
 import { BrowserRouter } from 'react-router-dom';
 import * as contentful from 'contentful'
import registerServiceWorker from './registerServiceWorker';

var client = contentful.createClient({
  space: 'on3t7p55b9vo',
  accessToken: 'e5ec91831b489dc0e4d81a2755bf84e9e1ddc71c3147e0f2674ca21dfc454e27' })
client.getEntries().then(entries => {
  entries.items.forEach(entry => {
    if(entry.fields) {
      console.log(entry.fields)
    }
  })
})

ReactDOM.render(
   <BrowserRouter>
     <App />
   </BrowserRouter>
   , document.getElementById('root'));
registerServiceWorker();
