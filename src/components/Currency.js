import React, { Component } from 'react';
//import { AppContext } from '../context/AppContext';
import '../App.css'

class Currency extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
        selectedOption: null,
      };
    }
  
    toggleDropdown = () => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen,
      }));
    }
  
    handleOptionClick = (option) => {
      this.setState({
        selectedOption: option,
        isOpen: false,
      });
    }
  
    render() {
      const { isOpen, selectedOption } = this.state;
      const currencies = [
        { id: '$', name: 'Dollar'},
        { id: '£', name: 'Pound'},
        { id: '€', name: 'Euro'},
        { id: '₹', name: 'Ruppee'},
      ];
  
      return (
        <div className="currency-dropdown">
          <button className="dropdown-toggle" onClick={this.toggleDropdown}>
            {selectedOption ? `Currency (${selectedOption.id} ${selectedOption.name})` : 'Select a Currency'}
          </button>
          {isOpen && (
            <ul className="dropdown-menu">
              {currencies.map((currency, index) => (
                <li
                  key={index}
                  onClick={() => this.handleOptionClick(currency)}
                  className="currency-option"
                >
                  {`${currency.id} ${currency.name}`}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }
  }
  
  export default Currency;