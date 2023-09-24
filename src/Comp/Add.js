import React, { useState } from "react";
import Show from "./Show";
import "../App.css"

const Add = () => {
  const [data, setData] = useState({ mail: "", pass: "", city: "" });
  const [list, setList] = useState([]);
  const [btn, setBtn] = useState(true);
  const [edtindx,setEdtindx]=useState()
  const handle = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const add = (e) => {
    if(data.mail=="" && data.pass=="" && data.city==""){
      alert("Enter Data")
    }
    else{
    e.preventDefault();
    setList([...list, data]);
    setData({ mail: "", pass: "", city: "" });
    }
  };
  const dlt = (i) => {
    list.splice(i, 1);
    setList([...list]);
  };
  const edt = (i) => {
    console.log(i);
    setData(list[i]);
    setBtn(false);
    setEdtindx(i)
  };
  const Updt=()=>{
    list.splice(edtindx,1,data)
    setList([...list])
    setData({ mail: "", pass: "", city: "" });
    setBtn(true)
  }
  return (
    <div>
      <h2>Add Users</h2>
      <form className="col 12">
        <div className="col-md-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="mail"
            className="form-control"
            onChange={handle}
            value={data.mail}
          />
          <label className="form-label">Password</label>
          <input
            type="password"
            name="pass"
            className="form-control"
            onChange={handle}
            value={data.pass}
          />
          <label className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            name="city"
            onChange={handle}
            value={data.city}
          />
          <br></br>{" "}
          {btn ? (
            <button type="button" class="btn btn-outline-primary" onClick={add}>
              Add
            </button>
          ) : (
            <button type="button" class="btn btn-outline-primary" onClick={Updt}>
              Update
            </button>
          )}
        </div>
        <hr></hr>
      </form>
      <Show list={list} dlt={dlt} edt={edt} />
    </div>
  );
};

export default Add;
