import React, { useState, useEffect } from 'react';
import './Todo.css';

interface Todo {
    id: number;
    name: string;
    important: boolean;
    user_id: number;
}

function TodoPage() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState('');
    const [isImportant, setIsImportant] = useState(false);
    const [loading, setLoading] = useState(true);

    // Edit state
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editName, setEditName] = useState('');

    // Using userId from localStorage or fallback to a default for testing
    const userId = localStorage.getItem('user_id') || '52';

    useEffect(() => {
        fetchTodos();
    }, [userId]);

    const fetchTodos = async () => {
        try {
            const res = await fetch(`http://localhost:5001/api/todo/${userId}`);
            if (res.ok) {
                const data = await res.json();
                setTodos(data);
            }
        } catch (err) {
            console.error("Error fetching todos:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleAddTodo = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTodo.trim()) return;

        const dto = { name: newTodo, important: isImportant };
        try {
            const res = await fetch(`http://localhost:5001/api/todo/${userId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dto)
            });
            if (res.ok) {
                const data = await res.json();
                setTodos([...todos, data]);
                setNewTodo('');
                setIsImportant(false);
            }
        } catch (err) {
            console.error("Error adding todo:", err);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            const res = await fetch(`http://localhost:5001/api/todo/${id}`, { method: 'DELETE' });
            if (res.ok || res.status === 204) {
                setTodos(todos.filter(t => t.id !== id));
            }
        } catch (err) {
            console.error("Error deleting todo:", err);
        }
    };

    const handleToggleImportant = async (id: number) => {
        try {
            const res = await fetch(`http://localhost:5001/api/todo/${id}/toggle`, { method: 'PUT' });
            if (res.ok) {
                setTodos(todos.map(t => t.id === id ? { ...t, important: !t.important } : t));
            }
        } catch (err) {
            console.error("Error toggling importance:", err);
        }
    };

    const startEditing = (todo: Todo) => {
        setEditingId(todo.id);
        setEditName(todo.name);
    };

    const cancelEditing = () => {
        setEditingId(null);
        setEditName('');
    };

    const saveEdit = async (id: number, important: boolean) => {
        if (!editName.trim()) return;

        const dto = { name: editName, important: important };
        try {
            const res = await fetch(`http://localhost:5001/api/todo/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dto)
            });
            if (res.ok) {
                const updatedTodo = await res.json();
                setTodos(todos.map(t => t.id === id ? updatedTodo : t));
                setEditingId(null);
                setEditName('');
            }
        } catch (err) {
            console.error("Error updating todo:", err);
        }
    };

    return (
        <div className="todo-page">
            <div className="todo-container">
                <header className="section-header">
                    <p className="eyebrow">Task Management</p>
                    <h1>Focus on what matters.</h1>
                    <p>Capture your daily tasks and keep track of your priorities in one simple workspace.</p>
                    {userId === '52' && <small style={{ color: 'var(--muted)' }}>(Using default user ID: 52)</small>}
                </header>

                <form className="add-todo-card" onSubmit={handleAddTodo}>
                    <input
                        type="text"
                        className="todo-input"
                        placeholder="What needs to be done?"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <label className="toggle-switch">
                        <input
                            type="checkbox"
                            checked={isImportant}
                            onChange={(e) => setIsImportant(e.target.checked)}
                            style={{ marginRight: '8px' }}
                        />
                        Important
                    </label>
                    <button type="submit" className="btn btn--primary">Add Task</button>
                </form>

                <div className="todo-list">
                    {loading ? <p style={{ textAlign: 'center', color: 'var(--muted)' }}>Loading tasks...</p> : todos.map(todo => (
                        <div key={todo.id} className={`todo-item ${todo.important ? 'important' : ''}`}>
                            {editingId === todo.id ? (
                                <div className="edit-mode">
                                    <input
                                        type="text"
                                        className="edit-input"
                                        value={editName}
                                        onChange={(e) => setEditName(e.target.value)}
                                        autoFocus
                                    />
                                    <div className="edit-actions">
                                        <button onClick={() => saveEdit(todo.id, todo.important)} className="btn btn--small btn--save">Save</button>
                                        <button onClick={cancelEditing} className="btn btn--small btn--cancel">Cancel</button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="todo-content">
                                        <span className="todo-text">{todo.name}</span>
                                        {todo.important && <span className="badge badge--important">Important</span>}
                                    </div>
                                    <div className="todo-actions">
                                        <button
                                            onClick={() => handleToggleImportant(todo.id)}
                                            className="btn btn--icon"
                                            title={todo.important ? "Mark as not important" : "Mark as important"}
                                        >
                                            {todo.important ? '★' : '☆'}
                                        </button>
                                        <button
                                            onClick={() => startEditing(todo)}
                                            className="btn btn--icon"
                                            title="Edit task"
                                        >
                                            ✎
                                        </button>
                                        <button
                                            onClick={() => handleDelete(todo.id)}
                                            className="btn btn--icon"
                                            style={{ color: 'var(--danger)' }}
                                            title="Delete task"
                                        >
                                            🗑
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                    {!loading && todos.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '40px', color: 'var(--muted)' }}>
                            <p>No tasks yet. Add one above to get started!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TodoPage;