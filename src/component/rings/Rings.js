import React,{Component} from 'react'

class Rings extends Component{

    render(){
        let {user} = this.props;
        return (
            <div>
                <h1>Rings</h1>  
                <h2>{user.username}</h2>             
            </div>
        )
    }
}

export default Rings;