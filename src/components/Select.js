import React, {Component } from 'react';

class Select extends Component {
    handleChange = event => {
        this.props.handleSelect(event.target.value)
        event.target.value = ''
    }
    
render() {
    
    return (
        <select name="characters" id="characters" onChange={this.handleChange}>
            <option value="">Please Select One</option>
            {this.props.characters.map((name, i) => {
                return <option value={name.name} key={i}>{name.name}</option>
            })}
            
        </select>
    )
}
    
}

export default Select;