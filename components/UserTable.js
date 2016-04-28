import React from 'react'
import UserRow from './UserRow'

class UserTable extends React.Component{

    render(){
        var rows = [];
        this.props.users.forEach((user) => {

            if ( user.name.toLowerCase().indexOf(this.props.filterState.filterText) === -1 ||
                    ( user.gender === 'male' && !this.props.filterState.male ) ||
                    ( user.gender === 'female' && !this.props.filterState.female )
                        || ( !this.props.filterState.male && !this.props.filterState.female )
                ){
                return;
            }

            rows.push(<UserRow key={user.id} name={user.name} gender={user.gender} />)
        });
        return (
            <table className="table">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Gender</td>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

export default UserTable