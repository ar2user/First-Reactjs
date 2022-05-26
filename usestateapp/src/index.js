import React from 'react';
import ReactDOM from 'react-dom/client';
import ArrayObjApp from './ArrayObjApp';
import ConditionalApp from './ConditionalApp';
import ErrorApp from './ErrorApp';
import NumberApp from './NumberApp';
import ObjectApp from './ObjectApp';

const number = ReactDOM.createRoot(document.getElementById('number'));
number.render(
    <NumberApp />
);

const bool = ReactDOM.createRoot(document.getElementById('bool'));
bool.render(
    <ConditionalApp />
);

const string = ReactDOM.createRoot(document.getElementById('string'));
string.render(
    <ErrorApp />
);

const objeto = ReactDOM.createRoot(document.getElementById('object'));
objeto.render(
    <ObjectApp />
);

const array = ReactDOM.createRoot(document.getElementById('array'));
array.render(
    <ArrayObjApp />
);

