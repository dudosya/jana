import React,{Component} from 'react';

const Navbar = ({onRouteChange,isSignedIn}) => {
		if(isSignedIn){
			return (
			<div className='bg-dark-green ba' style={{position:'fixed', top:'0',width:'100%'}}>
			 <nav style={{display: 'flex', justifyContent: 'start'}}>
			  <p onClick={() => onRouteChange('about')} className='f4 w-8 link dim gold pa3 pointer'>About Us</p>
			  <p onClick={() => onRouteChange('price')} className='f4 w-8 link dim gold pa3 pointer'>Check out our works</p>
			  <p onClick={() => onRouteChange('calculate')} className='f4 w-8 link dim gold pa3 pointer'>Calculate the price</p>
			  <p onClick={() => onRouteChange('filmmakers')} className='f4 w-8 link dim gold pa3 pointer'>Filmmakers</p>
			  <div className='w-40'> </div>
			  <div className='w-10'> </div>
			  <p onClick={() => onRouteChange('profile')}  className='f4 w-8 link dim gold pa3 pointer'>Profile</p>
	          <p onClick={() => onRouteChange('signout')} className='f4 w-8 link dim gold pa3 pointer'>Signout</p>
			 </nav>
			</div>
		)}
		else {
			return (
			<div className='bg-dark-green ba' style={{position:'fixed', top:'0',width:'100%'}}>
			 <nav style={{display: 'flex', justifyContent: 'start'}}>
			  <p onClick={() => onRouteChange('about')} className='f4 w-8 link dim gold pa3 pointer'>About Us</p>
			  <p onClick={() => onRouteChange('price')} className='f4 w-8 link dim gold pa3 pointer'>Check out our works</p>
			  <p onClick={() => onRouteChange('calculate')} className='f4 w-8 link dim gold pa3 pointer'>Calculate the price</p>
			  <p onClick={() => onRouteChange('filmmakers')} className='f4 w-8 link dim gold pa3 pointer'>Filmmakers</p>
			  <div className='w-40'> </div>
			  <div className='w-10'> </div>
			  <p onClick={() => onRouteChange('register')}  className='f4 w-8 link dim gold pa3 pointer'>Register</p>
	          <p onClick={() => onRouteChange('signin')} className='f4 w-8 link dim gold pa3 pointer'>Sign In</p>
			 </nav>
			</div>
			);
		}
		

}

export default Navbar;