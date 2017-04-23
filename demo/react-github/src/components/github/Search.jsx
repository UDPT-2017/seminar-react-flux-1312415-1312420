import React, {Component} from 'react';

class Search extends Component {

    onSubmit(e){
        e.preventDefault();
        var username = this.refs.username.value.trim();
        if(!username){
            alert('please enter user name');
            return;
        }
        this.props.onFormSubmit(username);
    }
    onClick(e){
        e.preventDefault();
        this.props.emptyUser();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label> search github user</label>
                    <input type="text" ref="username" className="form-control"/>
                    <input type="submit" value="submit"/>
                </form>
                <div>
                    <button onClick={this.onClick.bind(this)}>Reset</button>
                </div>
            </div>
        )
    }
}

export default  Search