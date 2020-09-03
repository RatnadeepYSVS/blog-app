import React, { Component } from 'react'
import {signUp} from '../actions/authaction'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class login extends Component {
    state={
        email:'',
        password:'',
        firname:'',
        laname:''  
    }
    handlertwo=e=>{
        this.setState({[e.target.id]:e.target.value})
    }
    handlerone=e=>{
        e.preventDefault();
        this.props.siup(this.state)
    }
    render() {
        const{auth}=this.props
        if(!auth.isEmpty) return <Redirect to='/'/>
        return (
            <div className='container white'>
                <form action="white" onSubmit={this.handlerone}>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={this.handlertwo}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={this.handlertwo}/> 
                    </div>
                    <div className="input-field">
                        <label htmlFor="firname">Firstname</label>
                        <input type="text" name="firname" id="firname" onChange={this.handlertwo}/> 
                    </div>
                    <div className="input-field">
                        <label htmlFor='laname'>Lastname</label>
                        <input type='text' name="laname" id="laname" onChange={this.handlertwo}/> 
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        authError:state.auth.authError,
        auth:state.firered.auth
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        siup:(newUser)=>dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(login)
