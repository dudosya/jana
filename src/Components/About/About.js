import React,{Component} from 'react';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

const txt1 = 'About Us';
const txt2 = 'We are a filmmaking club in Taldykorgan ';
const txt3 = 'You are free to join the club... ';
const txt4 = '...or order a photo/video';

const About = ({onRouteChange}) => {
	return (
	<div>	
		<div>
			<div style={{height:'5rem'}} ></div>
			<div className='bg-gold ws-normal center w-80'>
				<h1>{txt1}</h1>
			</div>
		</div>

		<div>
			<div className='w-10'>
			</div>
			<div className='bg-blue white center ba w-80'>
				<p className='f1'>{txt2}</p>
				<img src={img1} alt='' style={{width:'auto' ,height:'50rem' }}/>
			</div>
			<div className='bg-blue white center ba w-80'>
				<p onClick={()=>{onRouteChange('register')}} className='link pointer f1'>{txt3}</p>
				<img src={img2} alt='' style={{width:'auto' ,height:'50rem' }}/>
			</div>
			<div className='bg-blue white center ba w-80'>
				<p onClick={()=>{onRouteChange('calculate')}} className='link pointer f1'>{txt4}</p>
				<img src={img3} alt='' style={{width:'auto' ,height:'50rem' }}/>
			</div>
			
		</div>
		
			
	</div>	
	)
}

export default About;