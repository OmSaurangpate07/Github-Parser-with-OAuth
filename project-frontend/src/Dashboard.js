import React from 'react';
import { useEffect, useState } from 'react';
import Login from './Login';

const Dashboard = () => {
    const [rerender, setRerender] = useState(false);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const codeParam = urlParams.get("code");
        // console.log(codeParam);

        if (codeParam && (localStorage.getItem("accessToken") === null)) {
            async function getAccessToken() {
                //getAccessToken
                await fetch("http://localhost:4000/getAccessToken?code=" + codeParam, {
                    method: "GET"
                }).then((response) => {
                    return response.json();
                }).then((data) => {
                    // console.log(data);
                    if (data.access_token) {
                        localStorage.setItem("accessToken", data.access_token);
                        setRerender(!rerender);
                    }
                })
            }

            getAccessToken();
        }
    }, [])

    async function getUserData() {
        // getUserData
        await fetch("http://localhost:4000/getUserData", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("accessToken")
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            // console.log(data);
            setUserData(data)
        })
    }

    return (
        <div className="App">
            <header className="App-header">
                {localStorage.getItem("accessToken") ?
                    <>
                        <div className='logout-button-area'>
                            <button className='Logout-button' onClick={() => { localStorage.removeItem("accessToken"); setRerender(!rerender); }}>
                                Logout
                            </button>
                        </div>
                        <div className='greeting'>
                            <h2 className='h1-greeting'><img className='avatar-image' width="100px" height="100px" src={userData.avatar_url}></img> Hello, <span style={{ color: "darkviolet", marginLeft: "10px" }}>{userData.login}</span></h2>
                            <button className='get-data-button' onClick={getUserData}>Click Here To Get Details</button>
                            <br />
                        </div>
                        {Object.keys(userData).length !== 0 ?
                            <>
                                <h2 style={{ marginLeft: "10px" }}>Hello, {userData.login} your account has {userData.public_repos} Git Repositories.</h2>
                                <a className="user-link" href={userData.html_url}>Link to the user profile</a>
                            </>
                            :
                            <>
                            <h2 style={{marginLeft: "10px"}}>Please click on get details button to get details!</h2>
                            </>
                        }
                    </>
                    :
                    <>
                        <Login />
                    </>
                }
            </header>
        </div>
    );
}

export default Dashboard;
