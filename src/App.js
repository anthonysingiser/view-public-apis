//make render for loading and failed to load
//make buttons into clickable list instead
//each clicked list item will re-render page with treeview of api
//implement component and css to make more readable and collapsible 

import React from 'react'
import apiOptions from './apiOptions'
import Select from 'react-select'
import FetchApp from './FetchApp'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      optionSelect: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(optionSelect){
    this.setState({
      optionSelect: optionSelect.value
    })
  }
  render(){
    return(
      <div>
        <center>
          <h1>Public APIs</h1>
        </center>
        <Select
          options = {apiOptions}
          onChange={this.handleChange}
          placeholder = 'Select an API'          
        />
        <center>
          <h4>(click red boxes to expand)</h4>
          {this.state.optionSelect && <h2>{this.state.optionSelect}</h2>}
        </center>
        <br/>
        <br/>
        <FetchApp
          address = {this.state.optionSelect}
        />
      </div>
    )
  }
}
export default App