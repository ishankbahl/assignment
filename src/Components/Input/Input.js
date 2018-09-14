import React, { Component } from 'react';

class Input extends Component {

    constructor(props) {

        super(props);

        this.state = {
            input: this.props.value,
            isValid: true,
        }

    }

    handleChangeWrapper(event) {


        event.persist();

        this.setState({ 
            input: event.target.value,
            isValid: this.props.regex ? event.target.value.match(this.props.regex) : true,
        }, () => {
            if(this.state.isValid) {

                this.props.handleChange(event);
                
            }
        });

    }

    render() {

        return (
            <div>
                {
                    (this.props.type !== 'textarea') ? (<input 
                    type={this.props.type} 
                    name={this.props.name} 
                    value={this.state.input} 
                    onChange={(event) => this.handleChangeWrapper(event)} 
                    />) : 
                    (<textarea 
                        value={this.state.input} 
                        name={this.props.name}
                        onChange={(event) => this.handleChangeWrapper(event)} 
                    />)
                }
                {
                    !this.state.isValid && <div>Invalid Input</div>
                }
            </div>
        );

    }

}

export default Input;