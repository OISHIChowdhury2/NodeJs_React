import React, { Fragment, useEffect, useState } from 'react'
import Editinfo from './Profile_edite';

const Profile_view = () => {
    const [infos, setinfos] = useState([]);
 
   
    const deleteinfo = async id => {
        try {
            const deleteinfo = await fetch(`http://localhost:3000/api/users/${id}`, 
            {
                method: "DELETE"
            });

            setinfos(infos.filter(info => id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getinfo = async () => {

        try {
            const response = await fetch("http://localhost:3000/api/users");
            const jsonData = await response.json();

            setinfos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getinfo();
    }, []);

    console.log(infos);
return (
    <Fragment>
            {" "}
    <table class="table mt-5 text-center">
        <thead>
            <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            {infos.map(info => (
            <tr key={info.id}>
                <td>{info.firstname}</td>
                <td>{info.lastname}</td>
                <td>{info.email}</td>
                <td>{info.address}</td>
                <td>{info.phone}</td>
                <td>
                    <Editinfo info={info} />
                 
                </td>

                <button
                    className="btn btn-danger"
                    onClick={() => deleteinfo(info.id)}
                >
                    Delete
                </button>
            </tr>
            ))}
        </tbody>
            </table>
        </Fragment>
    );
};

export default Profile_view;