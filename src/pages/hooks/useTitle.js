import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} -Toy-marketplace`
    },[title])
}
export default useTitle