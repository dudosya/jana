import React,{Component} from 'react';


const txt1 = 'Sign In';



class Signin extends Component {
	constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = ({loadUser,onRouteChange}) => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('filmmakers');
        }
      })
  }



	render(){
		
	return (
	<div>	
		<div>
			<div style={{height:'5rem'}} ></div>
			<div className='bg-gold ws-normal center w-80'>
				<h1>{txt1}</h1>
			</div>
		</div>


		<div className=' center w-20'>

			<form className=" white-80">
			  <div className="measure">
			    <label for="email" className="f4 b db mb2">Email <span className="normal white-60"></span></label>
			    <input 
			    id="email" 
			    className="input-reset ba b--white-20 pa2 mb2 db w-100" 
			    type="email" 
			    aria-describedby="email-desc"
			    onChange={this.onEmailChange} 
			    />
			  </div>
			</form>

			<form className=" white-80">
			  <div className="measure">
			    <label for="password" className="f4 b db mb2">Password <span className="normal white-60"></span></label>
			    <input 
			    id="password" 
			    className="input-reset ba b--white-20 pa2 mb2 db w-100" 
			    type="password" 
			    aria-describedby="password-desc"
			    onChange={this.onPasswordChange} 
			    />
			  </div>
			</form>

			<button 
			class="mv2 pv2 ph3 pointer b br2 hover-bg-dark-green bg-green white bn f7 ttu tracked center" 
			type="submit"
			onClick={this.onSubmitSignIn}
			>
			Sign In
			</button>
			
		</div>

			<div style={{height:'2rem'}} ></div>
			<a className="white f4" onClick={()=>this.props.onRouteChange('register')}>Haven't registered yet? Click here</a>
		
			
	</div>	
	)

		

}
}

export default Signin;