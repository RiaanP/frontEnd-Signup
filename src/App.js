import React,{Component} from 'react';
import Particles from 'react-particles-js';
import Form from './component/form';
import './App.css'

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
class App extends Component{

  render(){
    return(
      <div>
      <Particles className='particles'
      params={particlesOptions}
    />
     <Form/>
     </div>
    )
  }
}

export default App