import React, { useState } from 'react';

const AddDefect = ({ onAddDefect }) => {
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [priority, setPriority] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description && category && priority) {
            const newDefect = {
                id: Math.floor(Math.random() * 1000),  // Generate a random ID for simplicity
                description,
                category,
                status: 'Open',
                priority,
            };
            onAddDefect(newDefect);
            // Reset form fields
            setDescription('');
            setCategory('');
            setPriority('');
            alert('Defect added successfully!');
        } else {
            alert('Please fill in all the fields.');
        }
    };

    return (
        <div>
            <h2>Add New Defect</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Description: </label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <div>
                    <label>Category: </label>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
                </div>
                <div>
                    <label>Priority: </label>
                    <input type="text" value={priority} onChange={(e) => setPriority(e.target.value)} required />
                </div>
                <button type="submit">Add Defect</button>
            </form>
        </div>
    );
};

export default AddDefect;
