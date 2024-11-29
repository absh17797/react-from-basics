import React from 'react';
import { Link } from 'react-router-dom';

const TodoList = () => {
    const todos = [
        { id: 1, title: 'Learn React', status: 'Completed' },
        { id: 2, title: 'Build a Todo App', status: 'Pending' },
    ];

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Todo List</h1>
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={todo.id}>
                            <td>{index + 1}</td>
                            <td>{todo.title}</td>
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