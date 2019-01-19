import React from 'react';
import { render } from 'react-dom';
import FirstComponent from '../../src';

const Index = () => (
    <FirstComponent /> 
);

render(<Index />, document.getElementById('root'));