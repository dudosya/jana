import React,{Component} from 'react';


const txt1 = 'Calculate the Price';


const catlen = new Array(7);

for(let i=0;i<7;i++){
	catlen[i]=new Array(7);
}

const error = "error";

catlen[0][0]=125  ;
catlen[0][1]=155  ;
catlen[0][2]=190  ;
catlen[0][3]=110  ;
catlen[0][4]=65  ;
catlen[0][5]=310  ;
catlen[0][6]=40  ;

catlen[1][0]=125*2;
catlen[1][1]=155*2;
catlen[1][2]=190*2;
catlen[1][3]=110*2;
catlen[1][4]=65*2;
catlen[1][5]=310*2;
catlen[1][6]=40*2;

catlen[2][0]=125*6;
catlen[2][1]=155*6 ;
catlen[2][2]=190*6;
catlen[2][3]=110*6;
catlen[2][4]=65*6;
catlen[2][5]=310*6;
catlen[2][6]=40*6;

catlen[3][0]=125*20;
catlen[3][1]=155*20;
catlen[3][2]=190*20;
catlen[3][3]=110*20;
catlen[3][4]=65*20;
catlen[3][5]=error;
catlen[3][6]=40*20;

catlen[4][0]=125*50;
catlen[4][1]=155*50;
catlen[4][2]=190*50;
catlen[4][3]=110*50;
catlen[4][4]=65*50;
catlen[4][5]=error;
catlen[4][6]=40*50;

catlen[5][0]=error;
catlen[5][1]=155*90;
catlen[5][2]=190*90;
catlen[5][3]=110*90;
catlen[5][4]=65*90;
catlen[5][5]=error;
catlen[5][6]=40*90;

catlen[6][0]=error;
catlen[6][1]=error;
catlen[6][2]=error;
catlen[6][3]=110*180;
catlen[6][4]=65*180;
catlen[6][5]=error;
catlen[6][6]=40*180;

class Calculate extends Component {
	constructor(){
		super();
		this.state={
			category: 'select',
			length: 'select',
			deadline: 'select',
			total:''
		}

		
	}






	render(){
		const {category,length,total,deadline} = this.state;
		const average = 10;
		const calculation = () => {
			if(category==="select"||length==="select"||deadline==="select"){
				this.setState({total:"Please choose all properties"})
			}
			else if(catlen[length][category]===error){
				this.setState({total:"We cannot do it. Please choose another category or length"})
			} else {
				this.setState({total:catlen[length][category]*deadline+" tenge"})
			}
			
		};

		const reset = () => {
			this.setState({category:'select',length:'select',deadline:'select'})
		};
		 

	return (
	<div>	
		<div>
			<div style={{height:'5rem'}} ></div>
			<div className='bg-gold ws-normal center w-80'>
				<h1>{txt1}</h1>
			</div>
		</div>

		<div className="flex justify-center items-center  ">

					<button class="w-15 mv2 pv2 ph3 pointer b br2 hover-bg-dark-green bg-green white bn f7 ttu tracked " 
					onClick = {reset}
					type="submit">
					Reset all properties
					</button>

			  <nav >
				  <ul class="  w-100 flex  menu list pa3 bg-moon-gray gray sans-serif f5 fw6 ttu tracked">
				    <li class="dib ma2 bg-white bg-animate hover-bg-light-pink hide-child relative-m relative-l  w-auto-ns">
				      <a href="#" class="dib nav tc no-underline pa3 ph4 dark-gray w-100">Category
				      </a>
				      <ul class="menu list bg-pink mt1 b-yellow pa2 f6 child child-vs o-100-vs absolute-m absolute-l top-100-m w-100 br2 shadow-4">
				        <li onClick={() => this.setState({category:0})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
				          Short Film
				        </li>
				        <li onClick={() => this.setState({category:1})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
				          Commercial
				        </li>
				        <li onClick={() => this.setState({category:2})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
				          Music Video
				        </li>
				        <li onClick={() => this.setState({category:3})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
				          Blog
				        </li>
				        <li onClick={() => this.setState({category:4})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
				          Interview
				        </li>
				        <li onClick={() => this.setState({category:5})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
				          Animation
				        </li>
				        <li onClick={() => this.setState({category:6})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
				          Event
				        </li>
				      </ul>
				    </li>

				    <li class="dib ma2 bg-white bg-animate hover-bg-light-pink hide-child relative-m relative-l   w-auto-ns">
				      <a href="#" class="dib nav tc no-underline pa3 ph4 dark-gray w-100">Length
				      </a>
				      <ul class="menu list bg-pink mt1 b-yellow pa2 f6 child child-vs o-100-vs absolute-m absolute-l top-100-m w-100 br2 shadow-4">
				        <li onClick={() => this.setState({length:0})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
				          >30sec
				        </li>
				        <li onClick={() => this.setState({length:1})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
				          30sec-1min
				        </li>
				        <li onClick={() => this.setState({length:2})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
				          1min-3min
				        </li>
				        <li onClick={() => this.setState({length:3})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
				          4min-10min
				        </li>
				        <li onClick={() => this.setState({length:4})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
				          11min-24min
				        </li>
				        <li onClick={() => this.setState({length:5})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
				          25min-44min
				        </li>
				        <li onClick={() => this.setState({length:6})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
				          44min-1.5h
				        </li>
				      </ul>
				    </li>

				    <li class="dib ma2 bg-white bg-animate hover-bg-light-pink hide-child relative-m relative-l   w-auto-ns">
				      <a href="#" class="dib nav tc no-underline pa3 ph4 dark-gray w-100">Deadline
				      </a>
				      <ul class="menu list bg-pink mt1 b-yellow pa2 f6 child child-vs o-100-vs absolute-m absolute-l top-100-m w-100 br2 shadow-4">
				        <li onClick={() => this.setState({deadline:50})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
				          Tomorrow
				        </li>
				        <li onClick={() => this.setState({deadline:30})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
				          Next 3 days
				        </li>
				        <li onClick={() => this.setState({deadline:20})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
				           Next 7 days
				        </li>
				        <li onClick={() => this.setState({deadline:10})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
				           Next 10 days
				        </li>
				        <li onClick={() => this.setState({deadline:10})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
				           Next 14 days
				        </li>
				        <li onClick={() => this.setState({deadline:9})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
				           Next month
				        </li>
				        <li onClick={() => this.setState({deadline:8})} class="ma1 pa2 ph3 bg-light-pink bg-animate hover-bg-white">
				           Later
				        </li>
				      </ul>
				    </li>
				  </ul>
				</nav>		

			
			
			  
			<button class="  w-15 mv2 pv2 ph3 pointer b br2 hover-bg-dark-green bg-green white bn f7 ttu tracked " 
					onClick = {calculation}
					type="submit">
					Calculate the Estimated Price
			</button>

			
		
			
		</div>
		<h1 className="white">{total}</h1>
		<h1 className="white">Length: {length}</h1>
		<h1 className="white">Category: {category}</h1>
		<h1 className="white">Deadline: {deadline}</h1>
		
			
	</div>	
	)
}
}

export default Calculate;