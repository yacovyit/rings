import React,{Component} from 'react'

class Login extends Component{
    
    click(event){
        console.log(event.target.value)
    }
    render(){
        let {onSubmit,onChange,onPasswordChange} = this.props;
        return (
            <div>
                <h1>Login</h1>
                <div className='login'>
                    <div>User
                         <input id="username" type='text' placeholder='user' onChange={onChange} />
                    </div>
                    <div>Password
                         <input id="password" type='password' placeholder='password' onChange={onChange} /> 
                    </div>
                    <button onClick={onSubmit}>Login</button>
                </div>
            </div>
        )
    }
}

export default Login;