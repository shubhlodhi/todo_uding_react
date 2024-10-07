import "./home.css"
import { useState, useEffect } from "react"
import Edit_arr from "./Edit_arr"
import { CiCircleCheck } from "react-icons/ci";

// import { useContext } from "react"
// import create_context from "../public/craete_context"
function UI(props) {
    const [inp, setinput] = useState([])
    const [arr, setarr] = useState(props.arr)
    const [isedit, setindex] = useState(null)
    const [chekc, setcheck] = useState([])
    // const [input_value, set_input] = useState("")

    // props.arr.map((data ,index) => {
    // const datas = useContext(create_context)

    function Deletes(index) {
        const arr_1 = props.arr
        arr_1.splice(index, 1)
        setarr(arr_1)
        // console.log(index)
        localStorage.setItem("items", JSON.stringify(arr_1))
        window.location.reload();

    }
    function update(index) {
        setindex(index)
        // console.log(index)
        // window.location.reload();
        // set_input(arr[index])


    }
    function saved(index, input_value) {
        const arr_1 = [...arr]
        arr_1[index] = input_value
        setarr(arr_1)
        localStorage.setItem("items", JSON.stringify(arr_1))
        setindex(null)
        console.log(input_value)

        window.location.reload();

    }
    function check(index) {

        // const checkitem = arr.filter(data=>data===index)
        const item = arr[index]

        if (!chekc.includes(item)) {
            setcheck([...chekc, item])
            localStorage.setItem("item"  ,JSON.stringify(chekc))
        // const gu = JSON.parse(localStorage.getItem("item"))
        // setcheck([...chekc , gu])
        console.log("s" ,gu)

        }
        // console.log("hfgh" ,item)

        // console.log(chekc)



        // arr.splice(index ,1)
        

        // Deletes(index)

    }

    useEffect(() => {
        let saved = JSON.parse(localStorage.getItem("items"))
        if (saved) {
            setarr(saved)
        }

    }, [])

    return (<>
        {props.arr.map((data, index) => {
            return (

                <>
                    {(index === isedit)
                        ? (
                            // <create_context.Provider>
                            <Edit_arr
                                key={data.id}
                                value={data}
                                inde={index}
                                onsaved={saved}>

                            </Edit_arr>
                            // {/* </create_context.Provider> */}

                        ) :
                        (



                            <div className="container" >
                                <div className="col-md-7 col-lg-7" >
                                    <div className="card md-1">
                                        <div className="card-body  " style={{ margin: "20px" }}>

                                            <section className="section_1" key={index} >
                                                <li className="m-4">{(data)}</li>
                                                <button onClick={() => Deletes(index)}
                                                    className="btn btn-success m-4"><i className="fa fa-check"></i>delete</button>
                                                <button onClick={() => update(index)}
                                                    className="btn btn-danger">update</button>
                                                <button className="btn btn-success"
                                                    style={{ margin: "20px" }} onClick={() => check(index)}><CiCircleCheck size={20} />
                                                </button>

                                            </section>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        )
                    }


                </>
            )
        })}
        <h1>
            completed task
        </h1>
        {chekc.map((data, index) =>
            <>
                <div className="container" >
                    <div className="col-md-7 col-lg-7" >
                        <div className="card md-1"></div>

                        <div className="card-body  " style={{ margin: "20px" }}>

                            <section className="section_1" key={index} >
                                <li className="m-4">{(data)}</li>
                                <button className="btn btn-danger"
                                                    style={{ margin: "20px" }} ><CiCircleCheck size={40} />
                                                </button>
                                {/* <button onClick={() => Deletes(index)}
                                    className="btn btn-success m-4"><i className="fa fa-check"></i>delete</button> */}


                            </section>
                        </div>
                    </div>
                </div>
                {/* </div> */}

            </>
        )}

    </>
    )










}
export default UI