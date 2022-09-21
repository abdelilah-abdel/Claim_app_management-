import axios from 'axios'
import React , {Component} from "react";


const api = axios.create({
        baseURL :"http://localhost:8000/client"
    }
)




class  API extends Component{
    state = {
        claims :[]
    }

     constructor() {
         super();
         api.get('/').then(res => {
             console.log(res.data)
             this.setState({claims: res.data})
         })
     }


      CreateClaim = async ( ) => {
        let res = await api.post('/DataTable', {nom :'smya ' , prenom :'preee', id:'okok'})
         console.log(res)
      }



    render() {

        return(
                <div>

                    {this.state.claims.map(claims => <h5 key={claims.id}>{claims.nom}</h5>)}

                </div>
        )
    }


}

export  default  API ;