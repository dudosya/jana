import React,{Component} from 'react';


const txt1 = 'Profile';

class Profile extends Component {
	constructor(){
		super();
		this.state = {
			location:'',
			phone:'',
			insta: '',
			youtube: '',
			description:'',
			first_choice:'',
			second_choice:'',
			third_choice:''
			
		}
		this.handleChangePhone = this.handleChangePhone.bind(this);
		this.handleChangeLocation = this.handleChangeLocation.bind(this);
		this.handleChangeInsta = this.handleChangeInsta.bind(this);
		this.handleChangeYoutube = this.handleChangeYoutube.bind(this);
		this.handleChangeDescription = this.handleChangeDescription.bind(this);
		this.loadFilmmaker=this.loadFilmmaker.bind(this);
	}

	componentDidMount() {
		fetch(`http://localhost:3000/profile/${this.props.id}`)
		.then(res=>res.json())
		.then((data)=>{
		  this.setState({
		      id : data.id,		
		      location: data.location,
		      phone: data.phone,
		      insta: data.insta,
		      youtube: data.youtube,
		      description: data.description,
		      first_choice: data.first_choice,
		      second_choice: data.second_choice,
		      third_choice: data.third_choice
	    })
		})
	}
	



	  handleChangeLocation(event) {
    	this.setState({location: event.target.value});
 	  }	

 	  handleChangePhone(event) {
    	this.setState({phone: event.target.value});
 	  }	

 	  handleChangeInsta(event) {
    	this.setState({insta: event.target.value});
 	  }

 	  handleChangeYoutube(event) {
    	this.setState({youtube: event.target.value});
 	  }

 	  handleChangeDescription(event) {
    	this.setState({description: event.target.value});
 	  } 

 	  loadFilmmaker = (data) => {
	    this.setState({
	      id : data.id,		
	      location: data.location,
	      phone: data.phone,
	      insta: data.insta,
	      youtube: data.youtube,
	      description: data.description,
	      first_choice: data.first_choice,
	      second_choice: data.second_choice,
	      third_choice: data.third_choice
	    })
	  }

   	   onSubmitFilmmaker = () => {
   	  	fetch('http://localhost:3000/register_filmmaker',{
   	  		method : 'post' ,
   	  		headers: {'Content-Type': 'application/json'},
   	  		body : JSON.stringify({
   	  			id: this.props.id,
   	  			location:this.state.location,
   	  			phone:this.state.phone,
   	  			insta:this.state.insta,
   	  			youtube:this.state.youtube,
   	  			description:this.state.description,
   	  			first_choice:this.state.first_choice,
   	  			second_choice:this.state.second_choice,
   	  			third_choice:this.state.third_choice
   	  		})
   	  	}).then(response=>response.json())
   	  	  .then(user=>{
   	  	  	if(user){ 	  	  		
   	  	  		this.loadFilmmaker(user);
   	  	  		this.props.loadUser(user);
	            this.props.onRouteChange('price');
   	  	  	}
   	  	  })
   	  }

   	  onSubmitFilmmakerPut = () => {
   	  	fetch('http://localhost:3000/updateFilmmaker',{
   	  		method : 'put' ,
   	  		headers: {'Content-Type': 'application/json'},
   	  		body : JSON.stringify({
   	  			id: this.props.id,
   	  			location:this.state.location,
   	  			phone:this.state.phone,
   	  			insta:this.state.insta,
   	  			youtube:this.state.youtube,
   	  			description:this.state.description,
   	  			first_choice:this.state.first_choice,
   	  			second_choice:this.state.second_choice,
   	  			third_choice:this.state.third_choice
   	  		})
   	  	}).then(response=>response.json())
   	  	  .then(user=>{
   	  	  	if(user){
   	  	  		this.loadFilmmaker(user);
   	  	  		this.props.loadUser(user);
	            this.props.onRouteChange('price');
   	  	  	}
   	  	  })
   	  }


	render(){
		const {location,phone,insta ,youtube , description,first_choice ,second_choice ,third_choice } = this.state;
	if(this.props.type==='customer'){
		return (
			<div>	
				<div>
					<div style={{height:'5rem'}} ></div>
					<div className='bg-gold ws-normal center w-80'>
						<h1>Hello , {this.props.name}</h1>
					</div>
				</div>			
			</div>	
	)
	}


	else if (this.props.type ==='filmmaker') {
		return (
			<div>	
				<div>
					<div style={{height:'5rem'}} ></div>
					<div className='bg-gold ws-normal center w-80'>
						<h1>Hellooooo , {this.props.name}</h1>
						<h1> {this.props.type} </h1>
						<h1>{phone}</h1>
					</div>
					
					<div >
					<form className=" white-80">
					  <div className="center w-40">

					    <label className="f4 b db mb2">Location <span className="normal white-60"></span></label>
					    <input 
					    onChange = {this.handleChangeLocation}
					    value = {location}
					    className="input-reset ba b--white-20 pa2 mb2 db w-100" 
					    />

					    <label className="f4 b db mb2">Phone <span className="normal white-60"></span></label>
					    <input 
					    onChange = {this.handleChangePhone}
					    value = {this.state.phone}
					    className="input ba b--white-20 pa2 mb2 db w-100" 
					    />

					    <label className="f4 b db mb2">Insta <span className="normal white-60"></span></label>
					    <input 
					    onChange = {this.handleChangeInsta}
					    value = {insta}
					    className="input-reset ba b--white-20 pa2 mb2 db w-100" 
					    />

					    <label className="f4 b db mb2"> Youtube Channel <span className="normal white-60"></span></label>
					    <input 
					    onChange = {this.handleChangeYoutube}
					    value = {youtube}
					    className="input-reset ba b--white-20 pa2 mb2 db w-100" 
					    />

					    <label className="f4 b db mb2">Describe yourself in ~50 words <span className="normal white-60"></span></label>
					    <input 
					    onChange = {this.handleChangeDescription}
					    value = {description}
					    className="input-reset ba b--white-20 pa2 mb2 db w-100" 
					    />

						<button 
						class="mv2 pv2 ph3 pointer b br2 hover-bg-dark-green bg-green white bn f7 ttu tracked center" 
						type="submit"
						onClick={this.onSubmitFilmmaker}
						>
						Post Your Info
						</button>

						<button 
						class="mv2 pv2 ph3 pointer b br2 hover-bg-dark-green bg-green white bn f7 ttu tracked center" 
						type="submit"
						onClick={this.onSubmitFilmmakerPut}
						>
						Save Changes
						</button>

					  </div>
					</form>
					</div>
				</div>			
			</div>	
		)	


	}
	}
}

export default Profile;