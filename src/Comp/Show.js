import React from "react";
// import {list} from "./Add.js"

const Show = ({ list , dlt, edt}) => {
  return (
    <div>
      <h3>Users List</h3>
      <table class="table table-dark table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">Mail</th>
            <th scope="col">Password</th>
            <th scope="col">City</th>
            <th scope="col">Edit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delete</th>
          </tr>
        </thead>
        {list.map((item, index) => (
          <tbody>
            <tr>
              <td>{item.mail}</td>
              <td>{item.pass}</td>
              <td>{item.city}</td>
              <td>
              <button type="button" class="btn btn-warning" onClick={()=>(edt(index))}>
                Edit
              </button>&nbsp;
              <button type="button" class="btn btn-danger" onClick={()=>(dlt(index))}>
                Delete
              </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Show;
