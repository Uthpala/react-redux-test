import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {filterTable} from '../actions/index';
import UserTable from '../components/UserTable'

class Filter extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            filterText : '',
            male : true,
            female : true,
        }
    }
    search(){
        this.props.filterTable({
            filterText:this.refs.filterText.value,
            male:this.refs.male.checked,
            female:this.refs.female.checked
        })
    }

    render(){
        let users = [
            {id:1, name: 'Alex', gender: 'male'},
            {id:2, name: 'John', gender: 'male'},
            {id:3, name: 'Anna', gender: 'female'},
            {id:4, name: 'Kate', gender: 'female'},
            {id:5, name: 'Lisa', gender: 'female'}
        ]
        return(
            <div>
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="Search..."
                               value={this.props.filterState.filterText}
                               onChange={this.search.bind(this)}
                               className="form-control"
                               ref="filterText"
                        />
                        <p>
                            <label for="male">
                                <input type="checkbox"
                                       ref="male"
                                       onChange={ this.search.bind(this) }
                                       checked = {this.props.filterState.male}
                                       id="male"
                                />Male
                            </label>
                            <label for="female">
                                <input type="checkbox"
                                       ref="female"
                                       onChange={ this.search.bind(this) }
                                       checked = {this.props.filterState.female}
                                       id="female"
                                />Female
                            </label>
                        </p>
                    </div>
                </form>
                <UserTable users={users} filterState={this.props.filterState} />
            </div>

        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ filterTable : filterTable }, dispatch);
}
function mapStateToProps(state){
    return {
        filterState : state.filter
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Filter)