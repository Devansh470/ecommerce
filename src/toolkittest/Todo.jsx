import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtodo, recdelete, todocomplete, todouncomplete, editdataSave } from "./slise";
const Todo=()=>{
  const [text, settext]= useState("");
  const [editbton, seteditbton]= useState(true);
  const [editid, seteditid]=useState("");
  const mydata= useSelector((state)=>state.counter.todo);  
  const mydis= useDispatch();
  
  let sno=0;
  const deletetask=(id)=>{
     mydis(recdelete(id))
  }

  const taskcomplete=(id)=>{
      mydis(todocomplete(id))
  }

const taskuncomplete=(id)=>{
  mydis(todouncomplete(id))
}

const dataedit=(id, data)=>{
  settext(data)
  seteditbton(false)
  seteditid(id)
}


const editSave=()=>{
   mydis(editdataSave({id:editid, data:text}))
   seteditbton(true)
   settext("");
}

  const ans=mydata.map((key)=>{
     sno++;
    return(
      <>
        <tr>
          <td>{sno} </td>
          <td> {key.status? <span style={{color:"red", textDecoration:"line-through"}}> {key.data}</span>  :  key.data} </td>
          <td><button onClick={()=>{deletetask(key.id)}}>Delete</button></td>
          <td>{key.status?(<button onClick={()=>{taskuncomplete(key.id)}}> Uncomplete</button>) : (<button onClick={()=>{taskcomplete(key.id)}}>Complete</button>)}</td>
          <td><button onClick={()=>{dataedit(key.id, key.data)}}> Edit</button></td>
        </tr>
      </>
    )
  })


  return(
    <>
    <br />
      Enter Your Task : <input type="text" value={text} onChange={(e)=>{settext(e.target.value)}} />
      <br />
      {editbton?(<button onClick={()=>{mydis(addtodo({id:Date.now(), data:text, status:false}))}}>add</button>):(<button onClick={editSave}>Edit Save</button>)}  <br />
       <table  >
         <tr>
          <th> </th>
          <th> work to do </th>
         </tr>
         {ans}
       </table>
    </>
  )
}
export default Todo;
