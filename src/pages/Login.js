import React from 'react';
import "../styles/Login.css";

const Login = () => {
  return (
    <div>
      <div className='loginDiv'>
        <section className='login'>
          <h1>Log In</h1>
          
          <section className='userId'>
            <p>User Id or Email</p>
            <input type ="user id" placeholder ='User Id or Email'></input>
          </section>

          <section className='passWord'>
            <p>Password</p>
            <input type ="password" placeholder ='Password'></input>
          </section>

          <section>
            <button>Login</button>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Login;