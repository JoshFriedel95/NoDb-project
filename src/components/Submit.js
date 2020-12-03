import React, {Component} from 'react'


class Submit extends Component {
    constructor() {
      super();
      this.state = ({
          value: ''
        })
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
      this.setState({
          value: e.target.value
        });
    }
  
    handleSubmit(e) {
      alert('A game was submitted: ' + this.state.value);
      e.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <input className="submit-2" placeHolder="Have a suggestion? Tell us here!" type="text" value={this.state.value} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default Submit