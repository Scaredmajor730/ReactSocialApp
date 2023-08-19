import './register.css'

const Register = () => {
    return (
        <div className='login'>
            <div className='loginwrapper'>
               <div className='loginleft'>
                <h3 className='loginlogo'>MKDSocial</h3>
                <span className='logindesc'>
                Connect with friends and the world around you on MKDSocial</span>
               </div>
               <div className='loginright'>
                 <div className='loginbox'>
                 <input placeholder='username' className='logininput'/>
                  <input placeholder='email' className='logininput'/>
                  <input placeholder='password' className='logininput'/>
                  <input placeholder='password again' className='logininput'/>
                  <button className='loginbutton'>Sign Up</button>
                  <button className='loginregisterbutton'>
                  Log into Account
                  </button>
                 </div>
               </div>
            </div>
        </div>
    );
}

export default Register;
