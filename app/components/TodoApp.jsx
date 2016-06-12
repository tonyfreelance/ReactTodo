var React = require("react");
var TodoList = require("TodoList");
var AddNewTodo = require("AddNewTodo");
var TodoSearch = require("TodoSearch");
var uuid = require("node-uuid");

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: '',
            todos: [{
                id: uuid(),
                text: 'Clean the bathroom'
            }, {
                id: uuid(),
                text: 'Eat the banana'
            }]
        };
    },
    handleAddNewTodo: function(text) {
      this.setState({
        todos: [
            ...this.state.todos,
            {
                id: uuid(),
                text: text
            }
        ]  
      });
    },
    handleSearch: function (showCompleted, searchText) {
      this.setState({
          showCompleted: showCompleted,
          searchText: searchText
      });
    },
    render: function() {
        var {todos} = this.state;
        
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos}/>
                <AddNewTodo onHandleNewTodo={this.handleAddNewTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;