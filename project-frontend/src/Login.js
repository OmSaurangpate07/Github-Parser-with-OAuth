import React from "react";
import "./style.css";
const CLIENT_ID = "96029a5be7d83bd2194a"

const Login = () => {
    function loginWithGithub() {
        window.location.assign("https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID);
    }
    return (
        <section className="home-page">
            <div className="home-section">
                <div className="login-section">
                    <img
                        className="login-image"
                        src="https://illustrations.popsy.co/fuchsia/product-launch.svg"
                        alt="Login-image"
                    />
                    <div className="login-title">
                        <h4><span style={{ color: "gray" }}>Login with</span> GitHub</h4>
                    </div>
                    <button onClick={loginWithGithub} className="login-button-section">
                        <div className="login-button">
                            <div className="git-logo">
                                <img
                                    className="git-image"
                                    src="https://pngimg.com/uploads/github/small/github_PNG83.png"
                                    alt="Git-Logo" />
                            </div>
                            <div className="git-title">
                                GitHub
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Login;
