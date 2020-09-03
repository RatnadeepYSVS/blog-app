import React, { Component } from 'react'
import {signIn} from '../actions/authaction'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class login extends Component {
    state={
        email:'',
        password:'',  
    }
    handlertwo=e=>{
        this.setState({[e.target.id]:e.target.value})
    }
    handlerone=e=>{
        e.preventDefault();
        this.props.signinusingeandp(this.state)
    }
    render() {
        const {authError,auth}=this.props
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
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                        <div className="red-text center">
                            {authError?<p>ErrorPleaseCheck</p>:null}
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

const mapStateToProps = state=>({
    authError:state.auth.authError,
    auth:state.firered.auth
})

const mapDispatchToProps=dispatch=>({
    signinusingeandp:credis=>dispatch(signIn(credis))
})

export default connect(mapStateToProps,mapDispatchToProps)(login)
