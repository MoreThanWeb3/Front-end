import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from './ConnexionPage.module.css';

export default function ConnexionPage() {
  const [accountEmail, setAccountEmail] = useState('');
  const [clientLastName, setClientLastName] = useState('');
  const [clientFirstName, setClientFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!accountEmail || !clientLastName || !clientFirstName | !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/sign-up', {
        accountEmail,
        clientLastName,
        clientFirstName,
        password
      });

      if (response.status === 200) {
        setSuccessMessage('Sign-up successful');
        setErrorMessage('');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setErrorMessage('An error occurred. Please try again later.');
      setSuccessMessage('');
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
  
    if (!accountEmail || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:8080/sign-in', {
        accountEmail,
        password
      });
  
      if (response.status === 200) {
        setSuccessMessage('Sign-in successful');
        setErrorMessage('');
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Error signing in:', error);
      setErrorMessage('Invalid account number or password.');
      setSuccessMessage('');
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={styles.__reset__}>
      <div className={styles.body_container}>
    <div className={`${styles.container} ${isSignUp ? styles.active : ''}`}>
    <div className={`${styles['form-container']} ${styles['sign-up']}`}>
        <form>
          <h1 className={styles.TitleBank}>More Than Car</h1>
          <h2 className={styles.h2}>Create Account</h2>
          <input type="text" placeholder="Email" value={accountEmail} onChange={(e) => setAccountEmail(e.target.value)}/>
          <input type="text" placeholder="Last Name" value={clientLastName} onChange={(e) => setClientLastName(e.target.value)}/>
          <input type="text" placeholder="First Name" value={clientFirstName} onChange={(e) => setClientFirstName(e.target.value)}/>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          {successMessage && <p className={styles.success}>{successMessage}</p>}
          <button onClick={handleSignUp}>Sign Up</button>
        </form>
      </div>
      <div className={`${styles['form-container']} ${styles['sign-in']}`}>

        <form onSubmit={handleSignIn}>
          <h1>Sign In</h1>
          <span>Sign in with your email and password</span>
          <input type="text" placeholder="Email" value={accountEmail} onChange={(e) => setAccountEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className={styles['toggle-container']}>
        <div className={styles.toggle}>
          <div className={`${styles['toggle-panel']} ${styles['toggle-left']}`}>
            <h1>Welcome Back!</h1>
            <p>Create account if you want to buy car</p>
            <button className={styles.hidden} onClick={toggleForm}>Sign In</button>
          </div>
          <div className={`${styles['toggle-panel']} ${styles['toggle-right']}`}>
            <h1>Hello, Friend!</h1>
            <p> Your email and password here</p>
            <button className={styles.hidden} onClick={toggleForm}>Sign Up</button>
          </div>
        </div>
      </div>  
    </div>
   </div> 
  </div> 
  );
}
