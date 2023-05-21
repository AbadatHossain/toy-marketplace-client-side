import { useEffect } from "react";


const DollDetails = (id) => {

    useEffect(()=>{
        fetch(`https://toy-marketplace-server-three.vercel.app/toy/${id}`)
        .then(res =>res.json())
        .then(data => console.log(data))
    },[])

    return (
        <div>
            <h1>Gttt</h1>
        </div>
    );
};

export default DollDetails;