export const createblog=(blog)=>{
    return (dispatch,getState,{getFirebase})=>{
        const firestore = getFirebase().firestore();
        const profile =getState().firered.profile;
        const firered = getState().firered.auth.uid;
        console.log(firered)
        firestore.collection('blogs').add({
            ...blog,
            firname:profile.firname,
            laname:profile.laname,
            authorId:firered,
            createdAt:new Date()
        }).then((resp)=>{
            dispatch({type:'ADD_BLOG',blog})}).catch((err)=>{
            dispatch({type:'ADD_BLOG_ERR',err})
        })
    }
}