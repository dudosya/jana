import React,{Component} from 'react';

class Filmmakers extends Component {
	constructor(){
		super();
		this.state = {
			name:'',
			location:'',
			phone:'',
			insta: '',
			youtube: '',
			description:'',
			first_choice:'',
			second_choice:'',
			third_choice:'',
			likes:'',
			message:''

			
		}
		
	}

	componentDidMount() {
		fetch(`http://localhost:3000/topFilmmakers`)
		.then(res=>res.json())
		.then((data)=>{
		  this.setState({
		      id : data.id,	
		      name: data.name,	
		      location: data.location,
		      phone: data.phone,
		      insta: data.insta,
		      youtube: data.youtube,
		      description: data.description,
		      first_choice: data.first_choice,
		      second_choice: data.second_choice,
		      third_choice: data.third_choice,
		      likes:data.likes
	    })
		})
	}

	  like = () => {
	  	this.componentDidMount();
	  	console.log(this.props.id);
	  	console.log(this.state.id);

	      fetch('http://localhost:3000/like', {
	      method: 'post',
	      headers: {'Content-Type': 'application/json'},
	      body: JSON.stringify({
	        cid:this.props.id,
	        fid:this.state.id
	      })
	    })

	      .then(response => response.json())
	      .then(data=>{
	      	if(data==='please log in'){
	      		alert(data)
	      	}
	      	else{
	      	this.setState({
	      		likes:data
	      	})}
	      })
	      


	  }
	

	render(){
		return(
			<div>
			<div style={{height:'5rem'}} ></div>
			<div style={{height:'5rem'}} ></div>
			<div style={{height:'5rem'}} ></div>

			<div >
				<div className='w-10'>
				</div>
				<div className='bg-blue white center ba w-50'>
					<h2 className='center'>{this.state.name}</h2>
					
				</div>
				<div className='bg-blue white center ba w-50'>
					<h2>{this.state.location}</h2>
					
				</div>
				<div className='bg-blue white center ba w-50'>
					<h2>{this.state.first_choice},{this.state.second_choice},{this.state.third_choice}</h2>
					
				</div>
				<div className='bg-blue white center ba w-50'>
					<h2>Number of likes : {this.state.likes}</h2>
					
				</div>

				<div className='bg-blue white center ba w-50'>
					<p className='link pointer f3' onClick={this.like}>Like it</p>
					
				</div>
				
				
			</div>

			</div>
			)
	}

	
}

export default Filmmakers;