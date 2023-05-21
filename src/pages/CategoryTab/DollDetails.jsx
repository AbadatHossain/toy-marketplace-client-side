import { useEffect } from "react";


const DollDetails = (id) => {

    useEffect(()=>{
        fetch(`http://localhost:5000/toy/${id}`)
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