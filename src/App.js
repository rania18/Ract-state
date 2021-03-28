import React from 'react'
import {Button} from 'react-bootstrap';
import './App.css';
import rania from "./images/rania.jpg"


class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			interval: null,
			timer: 0
		};
	}

	componentDidMount(){
		this.setState ({
			interval: setInterval( () =>{
				this.setState({timer:this.state.timer + 1});
			},1000)
		})
	}

	componentWillUnmount(){
		clearInterval(this.state.interval)
	}

    state={
      isVisible:false
    }

    person=[
      'Rania hamdi',
      'Softweer engineer'
    ]
  toggleVisibility = () => {
    this.setState({
      isVisible : !this.state.isVisible
    })
  }

render(){
  return (
    <div className='page'>
			<div className="mb-2">
			<h2 className='timer'>{this.state.timer}</h2>	
      <Button variant="primary" size="sm" onClick={this.toggleVisibility}>{this.state.isVisible ? "Hide profile" : "Show profile" }
			</Button>{' '}
			</div>
      {this.state.isVisible ? 
    (
      <div className="profilWrapper">
        <div className="profilPhoto">
        
          <img className="img" src={rania} />
        </div>
      <div>
      {this.person.map((info,i)=> (
         <h2 key={i}>{info}</h2>
         ))}
        
			</div>
    </div>
		
    ): (<h4>Click on the button to see the profile</h4>)}
    </div>
  );
}
}
export default App;
