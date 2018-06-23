import React,{Component} from 'react'

class Login extends Component{
    
    click(event){
        console.log(event.target.value)
    }
    render(){
        let {onSubmit,onUsernameChange,onPasswordChange} = this.props;
        return (
            <div>
                <h1>Login</h1>
                <div className='login'>
                    <div>User
                         <input type='text' placeholder='user' onChange={onUsernameChange} />
                    </div>
                    <div>Password
                         <input type='password' placeholder='password' onChange={onPasswordChange} /> 
                    </div>
                    <button onClick={onSubmit}>Login</button>
                </div>
            </div>
        )
    }
}

export default Login;