import { useEffect } from "react"

function Contact() {
    useEffect(()=>{
        return ()=>{
            console.log("unmount")
        }
    })
    return (

        <h1>Contact</h1>

    )
}
export default Contact