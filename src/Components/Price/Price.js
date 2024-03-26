import React,{Component} from 'react';
import iframe from 'react-iframe';




	const txt1 = 'Our works';
	const txt2 = 'You can find more in our YouTube Channel ';
	const vids = [
				 'http://www.youtube.com/embed/hOMBKt8wvks?autoplay=1',
				 'http://www.youtube.com/embed/M8Yn-CdWOPk?autoplay=1',
				 'http://www.youtube.com/embed/c4gqbgMzjwM?autoplay=1',
				 'http://www.youtube.com/embed/TaE7qJ1WK0E?autoplay=1',
				 'http://www.youtube.com/embed/_VGZye_jn2s?autoplay=1'

			     ];


class Price extends Component {

	constructor(){
		super();
		this.state={
			number:1,
		}
	}

	
			   



 
	render(){
		const {number}=this.state;
			const	prevButton = () => {
	     	if(number>0){
				this.setState({number:number-1});
			}
			else {
				this.setState({number:vids.length-1});
			}
	      }

		const   nextButton = () => {
			if(number<vids.length-1){
				this.setState({number:number+1});
			}
			else {
				this.setState({number:0});
			}

	      } 


	return (
	<div>	
		<div>
			<div style={{height:'5rem'}} ></div>
			<div className='bg-gold ws-normal center w-80'>
				<h1>{txt1}</h1>
			</div>
		</div>

		<div>
			<div className='w-10'></div>
			<div className='bg-blue white center ba w-80'>
				<a href='https://www.youtube.com/channel/UC6JvqmcX6gSHQnirPjPqFqQ' className='link f2'> {txt2} </a>
			</div>
		</div>

		<div style={{height:'2rem'}} ></div>

		<div className='flex'>
			
			<div className='w-30'>
				<div style={{height:'18rem'}}></div>
				<button className='w-30 grow f4 link ph3 pv2 dib white bg-black' onClick={prevButton}>Previous</button>
			</div>

			<div className='w-40' >
				<iframe  src={vids[number]} style={{width:'40rem' ,height:'40rem' }} > </iframe>
			</div>

			<div className='w-30'>
				<div style={{height:'18rem'}}></div>
				<button className='w-30 grow f4 link ph3 pv2 dib white bg-black' onClick={nextButton} >Next</button>
			</div>

			<div><h1>{number}</h1></div>

			

		</div>
			
	</div>	
	)}
}

export default Price;


	