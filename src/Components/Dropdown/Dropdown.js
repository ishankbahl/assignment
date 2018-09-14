import React, { Component } from 'react';

class Dropdown extends Component{

    constructor(props) {

        super(props);

        this.state = {
            searchText: "",
            filteredOptions: this.props.options,
        };

    }

    componentDidUpdate(_prevProps, prevState) {

        if(this.state.searchText !== prevState.searchText) {

            this.setState({
                filteredOptions: this.state.filteredOptions.filter(option => option.value.indexOf(this.state.searchText) > -1 ? 1 : -1)
            });

        }

    }

    render() {
        
        return (
            <div>
                { 
                    this.props.options.length > 10 &&
                    <input
                        type="text"
                        value={this.state.searchText}
                        onChange={(event) => this.setState({searchText: event.target.value})} 
                    />
                }
                <select 
                    value={this.props.value}
                    name={this.props.name}
                    onChange={(event) => this.propshandleChange(event)}
                    multiple={this.props.isMultiple}
                >
                    {this.state.filteredOptions.map((opt) => (<option value={opt.value} key={opt.value} >{opt.content}</option>))}
                </select>
            </div>
        );

    }

}

export default Dropdown;