import React from 'react';
import Navbar from './compos/navbar'
import {Switch,Route} from 'react-router-dom'
import Dash from './compos/dash'
import './App.css';
import ProList from './compos/prolist';
import Eachdet from './compos/info'
import Login from './compos/login'
import Create from './compos/create'
import Blogg from './compos/procreate'

class App extends React.Component{
  render(){
    return (
     <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Dash} />
          <Route exact path='/dash' component={ProList} /> 
          <Route exact path='/pro/:id' component={Eachdet}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/create' component={Create}/>
          <Route exact path ='/addblog' component={Blogg}/>
        </Switch>
      </div>
  )}
}

export default App;
