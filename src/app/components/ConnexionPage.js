"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from './ConnexionPage.module.css';

export default function ConnexionPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [signUpErrorMessage, setSignUpErrorMessage] = useState('');
  const [signUpSuccessMessage, setSignUpSuccessMessage] = useState('');
  const [signInErrorMessage, setSignInErrorMessage] = useState('');
  const [signInSuccessMessage, setSignInSuccessMessage] = useState('');
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!email || !name || !password) {
      setSignUpErrorMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/user/sign-up', {
        email,
        name,
        password
      });

      if (response.status === 200) {
        setSignUpSuccessMessage('Sign-up successful');
        setSignUpErrorMessage('');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setSignUpErrorMessage(error.response?.data || 'An error occurred. Please try again later.');
      setSignUpSuccessMessage('');
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setSignInErrorMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/user/sign-in', {
        email,
        password
      });

      if (response.status === 200) {
        setSignInSuccessMessage('Sign-in successful');
        setSignInErrorMessage('');

        if (email === "admin@gmail.com" && password === "admin") {
          await axios.post('http://localhost:8080/admin/sign-in', { email, password });
          router.push('/admin');
        } else {
          router.push('/');
        }
      }
    } catch (error) {
      console.error('Error signing in:', error);
      setSignInErrorMessage(error.response?.data || 'Invalid email or password.');
      setSignInSuccessMessage('');
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
            <form onSubmit={handleSignUp}>
              <h1 className={styles.TitleBank}>More Than Car</h1>
              <h2 className={styles.h2}>Create Account</h2>
              <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              {signUpErrorMessage && <p className={styles.error}>{signUpErrorMessage}</p>}
              {signUpSuccessMessage && <p className={styles.success}>{signUpSuccessMessage}</p>}
              <button type="submit">Sign Up</button>
            </form>
          </div>
          <div className={`${styles['form-container']} ${styles['sign-in']}`}>
            <form onSubmit={handleSignIn}>
              <h2 className={styles.h2}>Sign In</h2>
              <span>Sign in with your email and password</span>
              <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              {signInErrorMessage && <p className={styles.error}>{signInErrorMessage}</p>}
              {signInSuccessMessage && <p className={styles.success}>{signInSuccessMessage}</p>}
              <button type="submit">Sign In</button>
            </form>
          </div>
          <div className={styles['toggle-container']}>
            <div className={styles.toggle}>
              <div className={`${styles['toggle-panel']} ${styles['toggle-left']}`}>
                <h1 className={styles.h1}>Welcome Back!</h1>
                <p className={styles.p}>Carland is committed to offering you best vehicles because your satisfaction is our pride</p>
                <button className={styles.hidden} onClick={toggleForm}>Sign In</button>
              </div>
              <div className={`${styles['toggle-panel']} ${styles['toggle-right']}`}>
                <h1 className={styles.h1}>Hello !</h1>
                <p className={styles.p}>We offer a wide selection of high-quality cars, carefully chosen to meet all your needs and ensure an exceptional buying experience</p>
                <button className={styles.hidden} onClick={toggleForm}>Sign Up</button>
              </div>
            </div>
          </div>  
        </div>
      </div> 
    </div> 
  );
}
