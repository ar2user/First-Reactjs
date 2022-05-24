
import React from 'react';
import { render } from '@testing-library/react'
import FirstComponent from '../FirstComponent';


describe('Pruebas en componentes de React.js', () => {

    test('Debe regresar un string que diga "Hola desde una propiedad principal"', () => {
        
        const saludar = "Hola desde una propiedad principal";
        const renderizado = render(<FirstComponent hola = {saludar}/>)
        expect(renderizado.getByText(saludar)).toBeInTheDocument();

    });
});