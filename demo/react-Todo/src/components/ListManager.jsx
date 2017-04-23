var React = require('react');
var List = require('./List.jsx');
var Component = React.Component;

class ListManager extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
            newItemText: ''
        }
    }
    onChange(e) {
        this.setState({newItemText: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();

        var currentItems = this.state.items;
        currentItems.push(this.state.newItemText);
        this.setState({items: currentItems, newItemText:''});
    }
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input onChange={this.onChange.bind(this)} value={this.state.newItemText} />
                    <button>Add</button>
                </form>
                <List items={this.state.items}/>
            </div>
        )
    }
};

module.exports = ListManager;