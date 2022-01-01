import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Login from '../../pages/Login/Login';
import Services from '../../pages/Services/Services';
import Header from '../../pages/Shared/Header/Header'

const Home = () => {

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
    console.log(user.email);
    return (
        <div>
            <h2>this is home</h2>
            <Header></Header>
            {!user.email && <Login></Login>}
            {thisUser?.role === 'learner' && <Services></Services>}
        </div>
    );
};

export default Home;