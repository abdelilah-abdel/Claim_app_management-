import {stack , Alert} from  '@mui/material'



const  Alertmsg= ({nom, prenom , topologie } ) =>  {
    return(
        <stack spacing={2}>
        <Alert severity='info'>la reclamation est enregistre : nom : {nom}  prenom : {prenom}  topologie : {topologie} </Alert>
        </stack>
    )
}


export default Alertmsg;