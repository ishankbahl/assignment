import React, { Component } from 'react';
import debounce from 'lodash.debounce';

import { 
    Checkbox,
    Dropdown,
    FileUpload,
    Input,
    Radio,
} from '../../Components';

const DEBOUNCE_RATE = 250;

class Form extends Component {

    constructor(props) {

        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.sendResponseToServer = this.sendResponseToServer.bind(this);
        this.renderField = this.renderField.bind(this);

        this.state = {};

    }

    handleChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });

        debounce(this.sendResponseToServer, DEBOUNCE_RATE);

    }

    sendResponseToServer() {

        //http call to api with all the fields responses

    }

    renderField(field, index) {

        let fieldComponent;
        const name = `${field.type}${index}`;

        if(field.type === "checkbox") {

            fieldComponent = () => (
                <Checkbox
                    name={name}
                    isChecked={field.isChecked}
                    handleChange={this.handleChange}
                />);

                return (
                    <div key={name} >
                        <label>
                            { field.label }: 
                            { fieldComponent() }
                        </label>
                        {
                            field.isChecked &&
                            field.dependentFields.map((dependentField, index) => this.renderField(dependentField, index))
                        }
                    </div>);

        }
        else if(field.type === "dropdown") {

            fieldComponent = () => (
                <Dropdown
                    value={field.value}
                    name={name}
                    handleChange={this.handleChange}
                    isMultiple={field.isMultiple}
                    options={field.options}
                />
            );

        }
        else if(["textarea", "text", "number", "email", "password"].indexOf(field.type) !== -1) {
            
            fieldComponent = () => (
                <Input
                    type={field.type}
                    name={name}
                    value=""
                    handleChange={this.handleChange}
                />
            );

        }
        else if(field.type === "radio") {

            fieldComponent = () => (
                <div>
                    { field.values.map((value, index) => (
                        <Radio
                            name={name + index}
                            key={name + index}
                            value={value}
                            selectedOption={field.selectedOption}
                            handleChange={this.handleChange} 
                        />
                    )) }
                </div>
            );

        }
        else if(field.type === "file") {

            const refProp = React.createRef();
            fieldComponent = () => (
                <FileUpload
                    refProp={refProp}
                />
            );

            return (
                <label key={name} >
                    { field.label }:  
                    { fieldComponent() }
                </label>
            );

        }

        return (
            <label key={name} >
                { field.label }: 
                { fieldComponent() }
            </label>
        );

    }

    render() {

        return (
            <form>
                {this.props.data.map((field, index) => this.renderField(field, index))}
            </form>
        );

    }

}

export default Form;