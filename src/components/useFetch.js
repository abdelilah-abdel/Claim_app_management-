import { useState, useEffect } from "react";



const useFetch = (url) => {

  const abortCont = new AbortController();

  const [data, setData] = useState(null); // {/*usestate hook */}
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

    useEffect(()=> {  // whenever the page is rendring something (like when we firt open the page , this funtion works  )

      
            fetch(url, { signal: abortCont.signal }) // fetch api 

              
            .then((res) => {
                if (!res.ok) {
                  // can
                  throw Error("cannot  fetch the data ");
                }
                return res.json(); // we passe the res( data ) to a function that will allow us to understand the data an array (json format)
              })

              .then((data) => {
                setIsPending(false);
                 setData(data);
                setError(null);
              })

              .catch((err) => {
                if (err.name ==='AbourtError'){

                }
                else{

                   // this function fires when there's an issue with json server
                setIsPending(false);
                setError(err.message);
                }
               
              });
              return () => abortCont.abort(); 
    },[]) // []array allows the function to run once only at the beginning 


    return {data, setIsPending , error}

}

export default useFetch; 