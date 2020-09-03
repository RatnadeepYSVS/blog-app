import React from 'react'
import ProList from './prolist'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
class Dash extends React.Component{
    render(){
        const {projects,auth}=this.props
        if(auth.isEmpty)return <Redirect to='/login'/>
        return(
            <div className="dash container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProList pros={projects}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return({
    projects:state.firestore.ordered.blogs,
    auth:state.firered.auth
})}

export default compose(connect(mapStateToProps),firestoreConnect(()=>['blogs']))(Dash);