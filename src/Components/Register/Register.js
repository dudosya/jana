import React,{Component} from 'react';


const txt1 = 'You are registering as customer';
const txt2 = 'You are registering as filmmaker';





class Register extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email : '',
			name : '',
			password: '',
			type:'customer'

		}
	}

	
  onNameChange = (event) => {
    this.setState({name: event.target.value})
    
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
    
  }

  onSubmitSignIn = () => {
	      fetch('http://localhost:3000/register', {
	      method: 'post',
	      headers: {'Content-Type': 'application/json'},
	      body: JSON.stringify({
	        email: this.state.email,
	        password: this.state.password,
	        name: this.state.name,
	        type: this.state.type
	      })
	    })
	      .then(response => response.json())
	      .then(user => {
	        if (user) {
	          this.props.loadUser(user);
	          this.props.onRouteChange('price');
	        }
	      	 
	      })
	  }





	render(){
		if(this.state.type==='customer'){
			return (
				<div>	
					<div>
						<div style={{height:'5rem'}} ></div>
						<div className='bg-gold ws-normal center w-80'>
							<h1>{txt1}</h1>
						</div>
					</div>

				<div className="flex justify-center items-center">
					<nav >
						  <ul class="  w-100 flex  menu list pa3 bg-moon-gray gray sans-serif f5 fw6 ttu tracked">
						    <li class="dib ma2 bg-white bg-animate hover-bg-light-pink hide-child relative-m relative-l  w-auto-ns">
						      <a href="#" class="dib nav tc no-underline pa3 ph4 dark-gray w-100">Register As 
						      </a>
						      <ul class="menu list bg-pink mt1 b-yellow pa2 f6 child child-vs o-100-vs absolute-m absolute-l top-100-m w-100 br2 shadow-4">
						        <li onClick={() => this.setState({type:'customer'})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
						          Customer
						        </li>
						        <li onClick={() => this.setState({type:'filmmaker'})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
						          Filmmaker
						        </li>
						      </ul>
						    </li>
						  </ul>
					</nav>	    
				</div>

				<div style={{height:'5rem'}} ></div>

					<div className=' center w-20'>
						<form className=" white-80">
						  <div className="measure">
						    <label for="name" className="f4 b db mb2">Name <span className="normal white-60"></span></label>
						    <input 
						    id="name" 
						    className="input-reset ba b--white-20 pa2 mb2 db w-100" 
						    type="text" 
						    aria-describedby="name-desc" 
		 					onChange={this.onNameChange}
						    />
						  </div>
						</form>

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
						Register
						</button>
						
						
					</div>

						<div style={{height:'2rem'}} ></div>
						<a className="white f4" onClick={()=>this.props.onRouteChange('signin')}>Already have an account? Click here</a>
					
						
				</div>	
				)
		} else {
			return (
				<div>
					<div>	
						<div>
							<div style={{height:'5rem'}} ></div>
							<div className='bg-gold ws-normal center w-80'>
								<h1>{txt2}</h1>
							</div>
						</div>

					<div className="flex justify-center items-center">
						<nav >
							  <ul class="  w-100 flex  menu list pa3 bg-moon-gray gray sans-serif f5 fw6 ttu tracked">
							    <li class="dib ma2 bg-white bg-animate hover-bg-light-pink hide-child relative-m relative-l  w-auto-ns">
							      <a href="#" class="dib nav tc no-underline pa3 ph4 dark-gray w-100">Register As 
							      </a>
							      <ul class="menu list bg-pink mt1 b-yellow pa2 f6 child child-vs o-100-vs absolute-m absolute-l top-100-m w-100 br2 shadow-4">
							        <li onClick={() => this.setState({type:'customer'})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
							          Customer
							        </li>
							        <li onClick={() => this.setState({type:'filmmaker'})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
							          Filmmaker
							        </li>
							      </ul>
							    </li>
							  </ul>
						</nav>	    
					</div>
				</div>

				<div style={{height:'5rem'}} ></div>

				<div className=' center w-20'>
						<form className=" white-80">
						  <div className="measure">
						    <label for="name" className="f4 b db mb2">Name <span className="normal white-60"></span></label>
						    <input 
						    id="name" 
						    className="input-reset ba b--white-20 pa2 mb2 db w-100" 
						    type="text" 
						    aria-describedby="name-desc" 
		 					onChange={this.onNameChange}
						    />
						  </div>
						</form>

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
						Register
						</button>
						
						
					</div>

						<div style={{height:'2rem'}} ></div>
						<a className="white f4" onClick={()=>this.props.onRouteChange('signin')}>Already have an account? Click here</a>





				</div>


				)

		}
		}
	
}

export default Register;