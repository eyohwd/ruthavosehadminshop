import { useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    const getUsers = async () => {
      try {
        const res = await userRequest.get('users/?new=true')
        setUsers(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getUsers()
  }, 
  [])
  console.log(users)
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
           <li className="widgetSmListItem" key={user._id}>
           <img
             src={user.img || "data:image/png;base64,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"}
             alt=""
             className="widgetSmImg"
           />
           <div className="widgetSmUser">
             <span className="widgetSmUsername">{user.username}</span>
             
           </div>
           <button className="widgetSmButton">
             <Visibility className="widgetSmIcon" />
             Display
           </button>
         </li>
        ))}
       
        
      </ul>
    </div>
  );
}
