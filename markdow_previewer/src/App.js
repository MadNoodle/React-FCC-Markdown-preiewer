import React from 'react';
import createReactClass from 'create-react-class';
import { Markdown } from 'react-showdown';



export default class App extends React.Component{


  constructor(){
    super();
    return {
        value:''
      }
  }

  translate() {
    return { __html: this.state.converter.makeHtml(this.state.value) }
  }

  handleInput(e) {
      this.setState({ value: e.target.value });
    }

  render(){
    return (
    <div>
      <div>
        <textarea
          type='text'
          defaultValue={this.state.value}
          onInput={this.handleInput}>
        </textarea>
      </div>
      <Markdown markup={this.state.value}/>
    </div>

    );}

  }
