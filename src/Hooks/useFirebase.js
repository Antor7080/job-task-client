import { useEffect, useState } from "react";
import initializeAuthentication from '../pages/Login/Firebase/firebase.init'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";




initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);



    const auth = getAuth();
    const userRegister = (email, password, data, history) => {
        setIsLoading(true);
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                setAuthError('');

                setUser(data);
                saveUser(data, 'POST');

                history.replace('/profile');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }
    const databaseUrl = (path) => {
        const url = `http://localhost:5000/${path}`
        return url
    }
    const loginUser = (email, password, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                history.replace('/profile');
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }




    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    useEffect(() => {
        const url = databaseUrl(`users/${user.email}`)
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data?.admin))

    }, [user.email])


    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (data, method) => {

        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then()
    }



    return {
        user,
        admin,
        isLoading,
        authError,
        userRegister,
        databaseUrl,
        loginUser,
        logOut,
    }
}

export default useFirebase;