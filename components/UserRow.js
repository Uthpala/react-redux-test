import React from 'react'

class UserRow extends React.Component{

    render(){
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.gender}</td>
            </tr>
        )
    }
}

export default UserRow