import React,{Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Price from './Components/Price/Price';
import Calculate from './Components/Calculate/Calculate';
import Register from './Components/Register/Register';
import Signin from './Components/Signin/Signin';
import Filmmakers from './Components/Filmmakers/Filmmakers';
import Profile from './Components/Profile/Profile';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
}







class App extends Component {
  constructor(){
    super();
    this.state={
      route: 'about',
      isSignedIn:false,
      user: {
        id: '',
        name: '',
        email: '',
        type: ''
      }
      
    };

  }


  





   loadUser = (data) => {
      this.setState({isSignedIn:true,user: {
        id: data.id,
        name: data.name,
        email: data.email,
        type:data.type
      }

    }
      )
    }

  onRouteChange = (route)=>{
    if (route==='signout'){
      this.setState({isSignedIn:false})
    }
    this.setState({route:route});
  }





  render(){
    const {isSignedIn , route}=this.state;




  return (

    <div className="App">

      <Particles 
      className='particles'
      params={particlesOptions}
      />



      <Navbar 
         onRouteChange={this.onRouteChange}
         isSignedIn={this.state.isSignedIn}
      />

     
    
       <div>
       {  
                  route==='about'
                  ? <About onRouteChange={this.onRouteChange}/>

                  : 
                    route==='price'
                    ? <Price />
                      

                  : 
                    route==='calculate'
                    ? <Calculate />

                   : 
                    route==='filmmakers'
                    ? <Filmmakers 
                       id = {this.state.user.id}  
                       loadUser={this.loadUser} 
                       onRouteChange={this.onRouteChange}
                    />  
                    

                  : 
                    route==='register'
                    ? <Register
                    loadUser={this.loadUser} 
                    onRouteChange={this.onRouteChange} />

                  : 
                    route==='profile'
                    ? <Profile
                    loadUser={this.loadUser} 
                    type = {this.state.user.type}
                    name = {this.state.user.name}
                    id = {this.state.user.id}
                      />  
                    
                    

                  : 
                      <Signin 
                      loadUser={this.loadUser}
                      onRouteChange={this.onRouteChange}/> 

       }  
       </div> 

























                   
             
    

      

    </div>
  );
}}

export default App;



