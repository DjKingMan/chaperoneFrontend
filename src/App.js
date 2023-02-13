
import './App.css';
import  Face from './images/face.svg';
import  Arrow from './images/arrow.svg';
import  Male from './images/mars-symbol.svg';
import  Female from './images/venus-symbol.svg';
import  Card from './images/card.svg';
import React,{useState} from 'react';
function App() {
  const [show,setshow]=useState(true)
  return (
    <div className="App">
      {

        show?<div className="wrapper">
        <div className="form-left">
          <div className="text-center"id='left'>
          <img className="face" src={Face}  alt="face"/>
            <h2 className="text-center">Front End Challenge</h2>
            <p>
                This is the design that you will need to code up and impress us.
            </p>
           
            <div className="form-field">
                <button onClick={()=>setshow(false)}><img className="face" src={Arrow}  alt="face"/></button>
            </div>

          </div>
          
          
        </div>
        <form className="form-right">
    
            <div className="row">
            
                <div className="mb-3">
          
                <label>Name</label>
                
                    <div className="text-center"id='nest'>
                    <input type="text" name="name" id="name" className="input-field"placeholder='Matsora Mothooamorena'></input>
                    </div>
                </div>
                <div className="col-sm-3 mb-3">
                <label>Gender</label>
                </div>
                <div className="col-sm-3 mb-3">
                
                    <div className="form-field">
                <button ><img className="Gender" src={Male}  alt="face"/></button>
            </div>  
                </div>
                <div className="col-sm-3 mb-3">
                    <button ><img className="Gender" src={Female}  alt="face"/></button>
                </div>
                <div className="mb-3">
                    <label>Date of Birth</label>
                    <div className="text-center">
                    <input type="date" name="last_name" id="last_name" className="input-field" ></input>
                    </div>
                    
                </div>
            </div>
            <div className="mb-3">
                <label>Your Email</label>
                <div className="text-center" id='icon'>
                  
                <input type="email" className="input-field" name="email" required placeholder='matsoramothooamorena@gmail.com'></input>
                </div>
                
            </div>
            <div className="row">
                <div className="mb-3">
                    <label>Mobile</label>
                    <div className="text-center">
                    <input type="text" name="pwd" id="pwd" className="input-field" placeholder='+26657917590'></input>
                    </div>
                    
                </div>
                <div className=" mb-3">
                    <label>Customer_ID</label>
                    <div className="text-center">
                    <input type="text" name="cpwd" id="cpwd" className="input-field" placeholder='233099 8877812'></input>
                    </div>
                    
                </div>
            </div>
            <div className="row">
            <div className="col-sm-3 mb-3">
                <label>Member</label>
                </div>
                <div className="col-sm-3 mb-3">
                
                    <div className="form-field">
                <button style={{backgroundColor: "#373d40"}} ><img className="Gender"  src={Card}  alt="face"/></button>
            </div>  
                </div>
                <div className="col-sm-3 mb-3">
                    <button ><img className="Gender" src={Card}  alt="face"/></button>
  
                </div>

                <div className="col-sm-3 mb-3">
                    <button ><img className="Gender" src={Card}  alt="face"/></button>
                </div>


            </div>
            
            
            <div className="form-field text-right">
                <input type="submit" value="CANCEL" className="cancel" name="cancel"></input>

                <input type="submit" value="SAVE" className="register" name="register"></input>
            </div>
        </form>
    </div>:<div className="wrapper" id='next'>
        <div className="form-left">
          <div className="text-center">
          <img className="face" src={Face}  alt="face"/>
            <h2 className="text-center">Front End Challenge</h2>
            <p>
                This is the design that you will need to code up and impress us.
            </p>
           
            <div className="form-field">
                <button onClick={()=>setshow(true)}><img className="arrow" src={Arrow}  alt="face"/></button>
            </div>

          </div>
          
        </div>
        <form className="form-right">

        <h2 className="text-center">My world today</h2>
            <p className='text-center'>
            Pellentes habitant morbi tristique et netus et malesuada fames ac turpis ac turpis egestas,
            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante, View all days eu
            libeto sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
            Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae est.
            
            </p>

        </form>
    
    </div>
  
      }
    
    </div>
  );
}

export default App;
