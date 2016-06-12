var React = require("react");

var AddNewTodo = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        var todoText = this.refs.todoText.value;
        
        if(todoText.length > 0) {
            this.refs.todoText.value = '';
            this.props.onHandleNewTodo(todoText);
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

module.exports = AddNewTodo;