var React = require("react");

var TodoList = require("TodoList");
var AddNewTodo = require("AddNewTodo");
var TodoSearch = require("TodoSearch");

var TodoApp = React.createClass({
    render: function() {
        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch/>
                            <TodoList/>
                            <AddNewTodo/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;