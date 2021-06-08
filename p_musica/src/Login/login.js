import React from 'react';

const Login = (props) =>{

    const {
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError} = props;

     return (
         <section className="login">
             <div className="loginContainer">
                 <label>Usuario</label>
                 <input type="text" placeholder="tucorreo@loquesea.com" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                 <p className="errorMsg">{emailError}</p>
                 <label>Contraseña</label>
                 <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                 <p className="errorMsg">{passwordError}</p>
                 <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Inicia sesión</button>
                            <p>¿No tienes una cuenta? <span onClick={() => setHasAccount(!hasAccount)}>Registrate</span></p>
                        </>
                    ):(
                        <>
                            <button onClick={handleSignup}>Registrate</button>
                            <p>¿Tienes una cuenta? <span onClick={() => setHasAccount(!hasAccount)}>Inicia sesión</span></p>
                        </>
                    )}
                 </div>
             </div>
         </section>
     )
}

export default Login;