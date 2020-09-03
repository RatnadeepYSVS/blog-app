import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {firestoreConnect} from 'react-redux-firebase'
import moment from 'moment'
import {compose} from 'redux'
const info = (props) => {
    const {blog,auth}=props
    if(auth.isEmpty) return <Redirect to='/login'/>
    if(blog){
        return (
            <div className='container section prodet'>
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{blog.title}</span>
                        <p>{blog.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <p>Posted by {blog.firname} {blog.laname}</p>
                        <p>Posted  {moment(blog.createdAt.toDate()).calendar()}</p>
                    </div>
                </div>
            </div>
        )   
    }
    return(
        <div className="container">
            <p>waste shit</p>
        </div>
    )
    
}

const mapStateToProps=(state,indprops)=>{
    const id= indprops.match.params.id
    const blogs =state.firestore.data.blogs
    const blog= blogs?blogs[id]:null
    return{
        blog:blog,
        auth:state.firered.auth
    }    
}


export default compose(connect(mapStateToProps),firestoreConnect(()=>['blogs']))(info)
