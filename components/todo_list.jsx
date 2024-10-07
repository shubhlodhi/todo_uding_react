import "./home.css"
import { useState  ,useEffect} from "react"
import UI from "./todo_list_ui"
// In index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo_list(){
    
        const [count ,setCount ] = useState("")
        const [inputs , setinput] = useState([])
        // const [news , setnew] = useState(0)
        

        function add_item(){
            if (count != ""){
                const new_itms = [...inputs,count]
                setinput(new_itms)

                setCount("")
                localStorage.setItem("items" ,JSON.stringify(new_itms))
                // console.log(local)

            }

    
     

            
              
    }

    useEffect(()=>{
        let saved = JSON.parse(localStorage.getItem("items"))
        if (saved){
            setinput(saved)
        }

    },[])
    return (
        <>
        
       
        <div className="container">
        <div className="row">
        <div className="col-md-6 col-lg-6 p-0"></div>
        <div className="todo">

        <h1 className="pt-5 text-center" >TO-DO LIST</h1>
        {/* <div className="row"> */}
        <input type="text" className="form-control" placeholder="Add a task" value={count}
        onChange={(e)=> setCount(e.target.value)} />
        <button className="btn btn-primary" onClick={add_item} type="submit">ADD Item</button>
        {/* <textarea name="" id="">{count}</textarea> */}
        <h3 className="pt-5 text center">My day</h3>
        <UI   arr={inputs}/>
        </div>
        <div className="row">
        {/* <h2>completd</h2> */}
        </div>
        </div>
        </div>
        {/* </div>     */}

        
        </>
    )

}
export default Todo_list