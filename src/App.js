import {useEffect, useState} from "react";
import Card from "./components/Card";

async function getUsers(){
    try{
        return await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc').then(response => response.json());

    }catch (e) {
        return {
            error: true,
            message: e.message
        }
    }

}

export default function App() {
    const[users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        getUsers().then(response => {

            // console.log(response);
            if(!response.error){
                setUsers(response.results[0]);
            }

        }).finally(() => {
            setLoading(false)
        }
        )

        console.log(users)
    })

    if(loading){
        return <h1>Loading...</h1>
    }

    if(!loading && !users){
        return <h1>Something went wrong</h1>
    }

  return (
      <>
            <Card user={users}/>
      </>
  )
}
