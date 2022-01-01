import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageUser = () => {
    const [displayUsers, setDisplayUsers] = useState([]);
    const [allusers, setAllUsers] = useState();
    const [users, setUsers] = useState()


    useEffect(() => {
        fetch("https://evening-eyrie-71506.herokuapp.com/users")
            .then(res => res.json())
            .then(data => {
                setAllUsers(data)

            }, [])
    })
    useEffect(() => {
        const withoutAdmin = allusers?.filter((data) => data?.role !== 'admin');
        setUsers(withoutAdmin);
        setDisplayUsers(withoutAdmin)
    }, [allusers]);




    const handleSearch = (e) => {
        const searchText = e.target.value;
        const matchedUsers = users.filter((data) =>
            data.displayName.toLowerCase().includes(searchText.toLowerCase()) || data.email.toLowerCase().includes(searchText.toLowerCase()) || data.number.toLowerCase().includes(searchText.toLowerCase())
        );
        setDisplayUsers(matchedUsers);

    };

    return (
        <div className='pt-5 mt-5 container'>
            <input
                className="form-control"
                onChange={handleSearch}
                type="text"
                placeholder="Search products"
            />
            <div className="container pt-5  table-responsive">
                <h2 className="pt-5 pb-3 text-primary text-center">Manage All User</h2>
                <Table striped bordered hover variant="secondary text-center">
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>User Type</th>
                            <th>Number</th>
                            <th>Age</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    {displayUsers?.map(data =>
                        <tbody key={data._id}>
                            <tr>

                                <td>{data.displayName}</td>
                                <td>{data.email}</td>
                                <td>{data.role} </td>
                                <td>{data.number} </td>
                                <td>{data.age} </td>

                                {
                                    <td>
                                        <button

                                            className="btn btn-danger">
                                            X
                                        </button>
                                    </td>}
                            </tr>

                        </tbody>
                    )}
                </Table>
            </div>
        </div>
    );
};

export default ManageUser;