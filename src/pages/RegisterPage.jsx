import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { validate as validateEmail } from 'react-email-validator'

function RegisterPage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const { register } = useAuth();

  const navigate = useNavigate();

  function validate(emailValue, passwordValue) {

    if (!validateEmail(emailValue)) {
      return 'Invalid email format';
    } else if (passwordValue.length < 6) {
      return 'Password must be at least 6 characters long';
    }
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setError(null);

    const validationError = validate(email, password);
    if (validationError) {
      setError(validationError);
      return;
    }
    try {
      setIsSubmitting(true);
      await register(email, password);
      navigate('/outfits');

    } catch (err) {
      const userMessage =
      typeof err?.message ==='string' ? err.message : 'An error occurred during register.';
      console.error('Register error:', userMessage);
      setError('Register failed. Please check your credentials and try again.');
      return;
    } finally {
      setIsSubmitting(false);
    }
  }


  return (
    <>
      <h2>Register Form</h2>

      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error} </p>}

        <input onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          placeholder="Email"
          required
        />

        <input onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
          placeholder="Password"
          required
        />

        <button type="submit" disabled={isSubmitting}>Register</button>
      </form>
    </>
  )
}

export default RegisterPage
