import React, { useState } from 'react';
import ViewDefects from './ViewDefects';
import AddDefect from './AddDefect';
import Login from './Login';

const App = () => {
    const [defects, setDefects] = useState([
        { id: 1, description: 'Login button not working', category: 'UI', status: 'Open', priority: 'High' },
        { id: 2, description: 'API call failing', category: 'Backend', status: 'Open', priority: 'Critical' },
    ]);
    const [user, setUser] = useState(null); // Track logged-in user

    // Function to handle login
    const handleLogin = (loggedInUser) => {
        setUser(loggedInUser);
    };

    // Function to add defect to the list
    const addDefect = (defect) => {
        setDefects([...defects, defect]);
    };

    return (
        <div>
            <h1>Defect Tracker Application</h1>
            {!user ? (
                <Login onLogin={handleLogin} />
            ) : (
                <div>
                    <h3>Welcome, {user.username} ({user.role})</h3>
                    {user.role === 'Tester' && <AddDefect onAddDefect={addDefect} />}
                    <ViewDefects defects={defects} />
                </div>
            )}
        </div>
    );
};

export default App;
