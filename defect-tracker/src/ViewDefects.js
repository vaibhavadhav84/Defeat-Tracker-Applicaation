import React, { useState } from 'react';

const ViewDefects = () => {
    // Defining the hardcoded defect list initially
    const [defects, setDefects] = useState([
        { id: 1, description: 'Login button not working', category: 'UI', status: 'Open', priority: 'High' },
        { id: 2, description: 'API call failing', category: 'Backend', status: 'Open', priority: 'Critical' },
        { id: 3, description: 'Layout broken on mobile', category: 'UI', status: 'In Progress', priority: 'Medium' },
    ]);

    // Function to change defect status
    const changeStatus = (id) => {
        setDefects(defects.map(defect =>
            defect.id === id
                ? { ...defect, status: defect.status === 'Open' ? 'In Progress' : 'Closed' }
                : defect
        ));
    };

    return (
        <div>
            <h1>Defect List</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {defects.map((defect) => (
                        <tr key={defect.id}>
                            <td>{defect.id}</td>
                            <td>{defect.description}</td>
                            <td>{defect.category}</td>
                            <td>{defect.status}</td>
                            <td>{defect.priority}</td>
                            <td>
                                <button onClick={() => changeStatus(defect.id)}>
                                    {defect.status === 'Open' ? 'Start Progress' : 'Close Defect'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewDefects;
