import "./home.css"
import { useState } from "react"
// import { useContext } from "react"
// import Createcontext from "../public/craete_context"
function Edit_arr({value ,onsaved ,inde}){
    // const [arr, setarr] = useState(props.value)
    // const [indexs, setindex] = useState(null)
    const [input_value, set_input] = useState(value)
    // const {Setvalue  ,jivalue} = useContext(Createcontext)
    function handle(){
        onsaved(inde , input_value)
        console.log(input_value)
        
        // window.location.reload();
    }



 

    return(
        
        <>
        <h1>Edit value</h1>
        
        <input  type="text"  className="form-control" onChange={(e)=>set_input(e.target.value)} placeholder={value} />
        <button onClick={handle} className="btn btn-danger">update</button>


        </>
    )

}
export default Edit_arr