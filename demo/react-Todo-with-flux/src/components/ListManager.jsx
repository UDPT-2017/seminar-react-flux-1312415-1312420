var React = require('react');
var List = require('./List.jsx');
var Component = React.Component;
var TodoStore = require('../store/TodoStore');
var TodoAction = require('../action/action');

class ListManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: TodoStore.getAll(),
            newItemText: ''
        }
    }

    getTodo() {
        this.setState({
            items: TodoStore.getAll(),
            newItemText: ''
        })
    }

    componentDidMount() {
        TodoStore.on('change', this.getTodo.bind(this));
    }

    componentWillUnmount() {
        TodoStore.removeListener("change",this.getTodo.bind(this))
    }

    onChange(e) {
        this.setState({newItemText: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        TodoAction.createTodo(this.state.newItemText);

    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input onChange={this.onChange.bind(this)} value={this.state.newItemText}/>
                    <button>Add</button>
                </form>
                <List items={this.state.items}/>
            </div>
        )
    }
}
;

module.exports = ListManager;
