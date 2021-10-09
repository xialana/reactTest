import React, { Component } from 'react';
 
import { BrowserRouter, Route,Link} from 'react-router-dom';
 
import List from './pages/list';
 
import Employees from './pages/employees';
 
 
 
class App extends Component{
 
  render(){
 
     return (
 
          <BrowserRouter>
 
           <p style={{textAlign:'center'}}>   <Link to="/list" style={{color:'#ffff00',fontSize:20,marginRight:130}}>List</Link>
         
            <Link to="/emp" style={{color:'#ffff00',fontSize:20,}}>Employees</Link>
			</p>
 
            <hr/>          
 
          
 
            <Route path='/list' component={List} />
 
            <Route path='/emp' component={Employees} />        
 
          </BrowserRouter>
 
      );
 
  }
 
}
 
export default App;