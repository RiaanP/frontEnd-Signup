import React from 'react';
import FormSuccess from './FormSuccess';
class Form extends React.Component {
  constructor() {
    super();
    //state to hold in all the data submission
    this.state = {
      email: '',
      number: '',
      name: '',
      startDate:'',
      endDate:'',
      isToggled:false
    }
  }
   //setting state to for user input
  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPhoneChange = (event) => {
    this.setState({password: event.target.value})
  }

  onStartDateChange=(event)=>{
      this.setState({startDate:event.target.startDate})
  }

  onEndDate=(event)=>{
      this.setState({endDate:event.target.endDate})
  }

  onSubmit= () => {

    const { name, email, phone } = this.state;

    // Check For Errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }


         //posting data to node server and mysql database
    fetch('http://localhost:8080/submit', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        number: this.state.number,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .catch(err=>console.log(err))


      
    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
    });
  }

  //toggle a dropdown
onToggle=()=>{
this.setState({
  isToggled:!this.state.isToggled
})
  }

  render() {
    return (
<div>
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Submit Data</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Phone</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="phone"
                  name="phone"
                  id="password"
                  onChange={this.onPhoneChange}
                />
              </div>
              <div onClick={this.onToggle}>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Start Date</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="date"
                  name="startDate"
                  id="password"
                  onChange={this.onStartDateChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="password">End Date</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="date"
                  name="endDate"
                  id="password"
                  onChange={this.onEndChange}
                />
              </div>
             </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmit}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Submit"
              />
            </div>
          </div>
        </main>
      </article>
         <FormSuccess/>
    </div>
    );
  }
}

export default Form;