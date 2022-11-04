import React from 'react'

const Login = () => {
    return (
        <>
            <section className='auth-section'>
                <div className='auth-container'>
                    <div className="auth-banner">
                        <b>SIGN IN</b>
                        <br />
                        <p>Login to Unlock More Features</p>
                    </div>
                    <div className="auth-inputs">
                        <div>

                            <p>Enter your Mobile Number</p>
                            <br />
                            <input type="text" placeholder='Mobile Number' />
                            <br />
                            <input type="text" placeholder='OTP' />
                        </div>
                        <button>Sign in</button>
                    </div>
                </div>
            </section>
            <div className='footer-demo'>
                Footer here Soon!!
            </div>
        </>
    )
}

export default Login