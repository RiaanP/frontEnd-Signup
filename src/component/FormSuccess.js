import React, { Component } from 'react';
import './formSuccess.css'
class Test extends Component {

  //control state from the back-end
  state = {
      name: '',
    email: '',
    number:'',
    startDate:'',
    enddate:''
  };

  componentDidMount() {
    fetch('https://localhost:8080/submit')
      .then(response => response.json())
      .then(data =>
        this.setState({
          name: data.name,
          email: data.email,
          number:data.number,
          startDate:data.startDate,
          enddate:data.enddate
        })
      );
  }


  render() {
    const { name,email,number,startDate,enddate } = this.state;
    return (
      <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div class="tc">
      <h1 class="f4">{name}</h1>
        <hr class="mw3 bb bw1 b--black-10"/>
      </div>
      <p class="lh-copy measure center f6 black-70">
        {email}
        <hr class="mw3 bb bw1 b--black-10"/>
       {number}
       <hr class="mw3 bb bw1 b--black-10"/>
      {startDate}
      <hr class="mw3 bb bw1 b--black-10"/>
          {enddate}
      </p>
    </article>
    );
  }
}

export default Test;
