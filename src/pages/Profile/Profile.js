import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';


const Profile = () => {
    const { user } = useAuth();
    const [users, setUsers] = useState([])
    const [thisUser, setThisUser] = useState()

    useEffect(() => {
        fetch("https://evening-eyrie-71506.herokuapp.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            });
    }, [user?.email]);


    useEffect(() => {
        const userProfile = users.find((data) => data?.email === user?.email);
        setThisUser(userProfile);
    }, [user?.email, users]);


    return (
        <div className="container">

            <h2 className='pt-5 mt-5 text-center'>Your Information</h2>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="text-center">
                        <img className='img-fluid' src={thisUser?.profileImg} alt="" />
                        <h6>Name: {thisUser?.displayName}</h6>
                        <h6>Email: {thisUser?.email}</h6>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <img className='img-fluid' src={thisUser?.nidImg} alt="" />
                    <h2>{thisUser?.nidImg}</h2>
                </div>
                <div className="col-lg-4 col-md-6 col-12"></div>
            </div>
        </div>
    );
};

export default Profile;