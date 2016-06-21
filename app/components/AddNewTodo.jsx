var React = require("react");
var {connect} = require("react-redux");
var actions = require("actions");

var AddNewTodo = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var todoText = this.refs.todoText.value;
        
        if(todoText.length > 0) {
            this.refs.todoText.value = '';
            dispatch(actions.addTodo(todoText));
        } else {
            this.refs.todoText.focus();
        }
    },
    render: function() {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter your todo here" ref="todoText"/>
                    <button className="button expanded" type="submit">Add</button>
                </form>
            </div>
        );
    }
});

module.exports = connect()(AddNewTodo);