import React from 'react';
import {createRoot} from 'react-dom/client';
import CouterApp from './CounterApp';
import FirstComponent from './FirstComponent';
import './index.css'


//Creando referencia al elemento HTML
const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);

const divApp = document.querySelector('#counter');
const app = createRoot(divApp);

root.render( <FirstComponent hola = "Hola desde una propiedad principal" />);
app.render( <CouterApp value = { 123 } />);

