export const signIn =(creds)=>{
    return((dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            creds.email,
            creds.password
        ).then(()=>{
            dispatch({type:'loginsuccess'})
        }).catch((err)=>{
            dispatch({type:'error',err})
        })
    })
}
export const signOut = ()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase()
        firebase.auth().signOut().then(()=>dispatch({type:'SIGN_OUT'}))
    }
}
export const signUp =(newUser)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase=getFirebase()
        const firestore=getFirestore()
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(res=>{
            return firestore.collection('users').doc(res.user.uid).set({
                firname:newUser.firname,
                laname:newUser.laname,
                initials:newUser.firname[0]+newUser.laname[0]
            })
        }).then(()=>{
            dispatch({type:'SINGUPSUCCED'})
        }).catch(err=>{
            dispatch({type:'ERRINSIUP',err})
        })}
}