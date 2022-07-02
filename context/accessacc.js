import { User } from "./allcontexts";
import React, { useState } from "react";
import $ from "jquery";

const Userdatafunc = (props) => {
  const [userdata, setuserdata] = useState("");
  const [login, setlogin] = useState(false);
  const update = (data) => {
    setuserdata(data);
    console.log(data);
  };
  const saveuserinfo = () => {
    if (localStorage.getItem("token") !== null) {
      $.ajax({
        type: "get",
        url: "/api/auth/user",
        headers: { auth_token: localStorage.getItem("token") },
        success: (data) => {
          setuserdata(data);
          setlogin(true);
        },
        error: (err) => {
          alert(err.responseText);
        },
      });
    }
  };
  return (
    <User.Provider value={{ userdata, saveuserinfo, login }}>
      {props.children}
    </User.Provider>
  );
};
export default Userdatafunc;
