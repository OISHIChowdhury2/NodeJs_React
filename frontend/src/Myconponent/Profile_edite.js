import React, {Fragment, useState} from "react";


const Editinfo = ({info}) => {
  const [firstname,setFirstname] = useState(info.firstname);
  const [lastname,setLastName] = useState(info.lastname);
  const [email,setemail]=useState(info.email);
  const [address,setaddress]=useState(info.address);
  const [phone,setphone] = useState(info.phone);


  const updateinfo =async e =>{
    e.prevenDefault();
    try {
        const body = { firstname, lastname, email, address, phone };
        const response = await fetch(`http://localhost:3000/api/users/${info.id}`, 
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
        };
  
return(
  <Fragment>
  <button
    type="button"
    class="btn btn-warning"
    data-toggle="modal"
    data-target={`#id${info.info_id}`}
  >
    Edit
  </button>

  {/* 
    id = id10
  */}
  <div
    class="modal"
    id={`id${info.id}`}
    onClick={() => setFirstname(info.firstname)}
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit info</h4>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            onClick={() => setFirstname(info.firstname)}
          >
            &times;
          </button>
        </div>

        <div class="modal-body">
          <input
            type="text"
            className="form-control"
            value={firstname}
            onChange={e => setFirstname(e.target.value)}
          />
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-warning"
            data-dismiss="modal"
            onClick={e => updateinfo(e)}
          >
            Edit
          </button>
          <button
            type="button"
            class="btn btn-danger"
            data-dismiss="modal"
            onClick={() => setFirstname(info.firstname)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</Fragment>
);
};
 export default Editinfo;