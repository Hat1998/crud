import React from "react";
import axios from "axios";
import "../App.css";
 
 
function Post() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNum, setPhoneNum] = React.useState<any>();
  const [data, setData] = React.useState([]);

  axios.get("https://63e225d4109336b6cb00a67d.mockapi.io/myDb").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  const API = "https://63e225d4109336b6cb00a67d.mockapi.io/myDb";
  function PostData() {
    if (firstName.length >= 3 && lastName.length >= 3 && email.includes('@')) {
        axios.post(API, {
            firstName,
            lastName,
            email,
            phoneNum,
          });
           axios.get('https://63e225d4109336b6cb00a67d.mockapi.io/myDb')
    }else{
        alert("Please enter valid data")
    }

   
  }

  return (
    <div>
      <div className="inputField">
        <input
          placeholder="first name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
        <input
          placeholder=" last name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input>
        <input
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          placeholder=" phone number"
          onChange={(e) => {
            setPhoneNum(e.target.value);
          }}
        ></input>
        <button onClick={PostData}>logIn</button>
      </div>

    <div>
        
    <ul>
        {
            
            data.map((item:any) => 

            <li key={item.id}>
                <p>{item.firstName}</p>
                <p>{item.lastName}</p>
                <p>{item.email}</p>
                <p>{item.phoneNum}</p>
                </li>


            )
        }
        </ul>
         
    </div>
       
    </div>
  );
}

export default Post;
