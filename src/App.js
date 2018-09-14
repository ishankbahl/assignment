import React, { Component } from 'react';

import { Form } from './Components';
//Data structure to be passed as prop to the form component
/*const sample = [
    {
        type: 'checkbox',
        label: 'checkbox',
    },
    {
        type: 'dropdown',
        label: 'dropdown',
        value: '',
        isMultiple: '',
        options: [
            {
                value: '',
                content: '',
            },
        ]
    },
    {
        type: 'file',
        label: 'file'
    },
    {
        type: 'text',
        label: 'text'
    },
];*/

class App extends Component {
  render() {
    return (
      <Form data={[]} /> 
    );
  }
}

export default App;
