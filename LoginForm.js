//LoginForm.js
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Perform sign-in logic (e.g., send credentials to server)
    // ...

    // Clear form inputs
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      {error && <div className="error">{error}</div>}
      <button type="submit">Sign In</button>
    </form>
  );
};

const App = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <LoginForm />
    </div>
  );
};

export default App;
