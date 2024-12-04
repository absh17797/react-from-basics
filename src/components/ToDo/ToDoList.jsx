import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const TodoList = () => {

    const location = useLocation();
    const [todos, setTodos] = useState([
        { id: 1, title: 'Learn React', description: 'Learn React', priority: "High", type: "Work", status: 'Completed' },
        { id: 2, title: 'Build a Todo App', description: 'Build a Todo App', priority: "High", type: "Work", status: 'Pending' },
    ]);

    useEffect(() => {
        console.log("location.state=>",location.state)
        if (location?.state) {
            setTodos((prevTodos) => [...prevTodos, Object.assign(location?.state,{id: todos.length + 1 })]);
        }
    }, [location.state]);

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Todo List</h1>
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={index+1}>
                            <td>{index + 1}</td>
                            <td>{todo?.title}</td>
                            <td>{todo?.description}</td>
                            <td>{todo?.priority}</td>
                            <td>{todo?.type}</td>
                            <td>
                                <span
                                    className={`badge ${todo.status === 'Completed' ? 'bg-success' : 'bg-warning'
                                        }`}
                                >
                                    {todo.status}
                                </span>
                            </td>
                            <td>
                                <Link to={`/edit/${todo.id}`} className="btn btn-sm btn-warning me-2">
                                    Edit
                                </Link>
                                <button className="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="text-end">
                <Link to="/todos/add" className="btn btn-primary">Add New Todo</Link>
            </div>
        </div>
    );
};

export default TodoList;