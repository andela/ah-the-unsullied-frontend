import React from 'react';
import { render } from 'enzyme';
import Home from './home';

describe('Test dummy homepage', () =>{
    it('should have Welcome message', () =>{
        expect(render(<Home />).find('h1').text()).toEqual('Welcome to Authors Haven');
    });

});