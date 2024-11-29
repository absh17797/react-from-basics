import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const AddEditTodo = () => {
    const { id } = useParams();
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        status: 'Pending',
        priority: 'Low',
        type: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setTodo({
            ...todo,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', todo);
    };

    return (
        <div className="container my-5">

            <h1 className="text-center">{id ? 'Edit Todo' : 'Add New Todo'}</h1>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={todo.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        name="description"
                        value={todo.description}
                        onChange={handleChange}
                        rows="3"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select
                        className="form-select"
                        name="status"
                        value={todo.status}
                        onChange={handleChange}
                    >
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Priority</label>
                    <select
                        className="form-select"
                        name="priority"
                        value={todo.priority}
                        onChange={handleChange}
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Type</label>
                    <div>
                        <input
                            type="radio"
                            id="work"
                            name="type"
                            value="Work"
                            checked={todo.type === 'Work'}
                            onChange={handleChange}
                        />
                        <label htmlFor="work" className="ms-2 me-3">Work</label>
                        <input
                            type="radio"
                            id="personal"
                            name="type"
                            value="Personal"
                            checked={todo.type === 'Personal'}
                            onChange={handleChange}
                        />
                        <label htmlFor="personal" className="ms-2">Personal</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-success w-100">
                    {id ? 'Update' : 'Add'} Todo
                </button>
            </form>
        </div>
    );
};
export default AddEditTodo;