import React from 'react';
import './App.css';
import Profile from './component/Profile';


class App extends React.Component {
constructor(props) {
  super(props);

  this.state = { person:{
    fullName : "mohamed harzali",
    profession : "web developer",
    bio : "19 years old . student",
    photo : <img className='img' src="./photo.jpg" alt=''></img>},
    show: false
  }
  }


render() {
  return (
    <div className="App-header">
      {
        this.state.show?
          <div className="App-header">
            <h1>{this.state.person.fullName}</h1>
            <div>{this.state.person.photo}</div>
            <h2>{this.state.person.profession}</h2>
            <p>{this.state.person.bio}</p>
            <Profile>
            </Profile>
          </div>
        :null
      }
      <button type="button" className="btn btn-light" onClick={()=>this.setState({...this.state,show:!this.state.show})}>
        <h4>Click</h4>
      </button>
     </div> 
  );
}
}
export default App;
