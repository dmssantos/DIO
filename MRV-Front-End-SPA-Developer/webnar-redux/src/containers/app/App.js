import React, { Component } from 'react';

import Button from '../../components/button';
import Input from '../../components/input';
import List from '../../components/list';


class App extends Component {
  state = {
    input: ''
  };

  handleOnClick = () => {
    console.log('button clicked')
  }

  handleOnChange = event => {
    this.setState({input: event.target.value});
  };

  render() {
    const { input } = this.state;

    return(
      <div>
        <List todoList={[]}/>
        <Input onChange={event => this.handleOnChange(event)} value={input} />
        <Button onClick={() => this.handleOnClick()}>Adicionar</Button>
      </div>
    )
  }
}

export default App;