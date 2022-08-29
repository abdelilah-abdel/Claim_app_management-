import { Link } from 'react-router-dom';

const claimsList = ({ client }) => {



    return (
        <div className="blog-list">
            {client.map(claim => (
                <div  key={client.id} >
                    <Link to={`/client/${client.id}`}>
                        <h2>{ client.nom }</h2>
                        <p>{ client.objet }</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}


export default claimsList;




