import React, {Component} from 'react';

class Test extends Component {
    render(){
        console.log(this.props);
        return(
            <div>
                <h3>
                    {this.props.match.params.id}
                </h3>
            </div>
        )
    }
}

export default Test;