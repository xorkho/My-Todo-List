import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [priority, setPriority] = useState("Medium"); // Default priority
    const [dueDate, setDueDate] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or description can't be empty");
        } else {
            addTodo(title, desc, priority, dueDate);
            setTitle("");
            setDesc("");
            setPriority("Medium");
            setDueDate("");
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg my-6">
            <h3 className="text-xl font-bold mb-4 text-center">Add A Todo</h3>
            <form onSubmit={submit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium">
                        Todo Title
                    </label>
                    <input
                        type="text"
                        className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="desc" className="block text-sm font-medium">
                        Todo Description
                    </label>
                    <input
                        type="text"
                        className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        id="desc"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="priority" className="block text-sm font-medium">
                        Priority
                    </label>
                    <select
                        id="priority"
                        className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="dueDate" className="block text-sm font-medium">
                        Due Date
                    </label>
                    <input
                        type="date"
                        className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        id="dueDate"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded transition duration-200"
                >
                    Add Todo
                </button>
            </form>
        </div>
    );
};
