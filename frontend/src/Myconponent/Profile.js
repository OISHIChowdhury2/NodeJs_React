import React, { Fragment, useState } from "react";
export const Profile = () => {

// insert Value
  const [firstname,setFirstname] = useState("");
  const [lastname,setLastName] = useState("");
  const [email,setemail]=useState("");
  const [address,setaddress]=useState("");
  const [phone,setphone] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { firstname, lastname, email, address, phone };
      const response = await fetch("http://localhost:3000/api/users", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

// delete


  return (
    <Fragment>
      <div class="container-sm">
        <div>
          <form method="POST" className="reg-form" onSubmit={onSubmitForm}>
            <div class="sm-3">
              <label class="form-label">First Name</label>
              <input
                type="text"
                class="form-control"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                id="firstname"/>
            </div>
            <div class="sm-3">
              <label class="form-label">Last Name</label>
              <input
                type="text"
                class="form-control"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                id="lastname"/>
            </div>
            <div class="sm-3">
              <label class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                value={email}
                onChange={(e) => setemail(e.target.value)} />
            </div>
            <div class="sm-3">
              <label class="form-label">Address</label>
              <input
                type="text"
                class="form-control"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
                id="address"/>
            </div>
            <div class="sm-3">
              <label class="form-label">Phone</label>
              <input
                type="number"
                class="form-control"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                id="phone"/>
            </div>
            <div class="f-grid gap-2 d-md-flex justify-content-md-end">
              <button class="btn btn-primary" type="button" onClick={onSubmitForm}>
                Button
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
