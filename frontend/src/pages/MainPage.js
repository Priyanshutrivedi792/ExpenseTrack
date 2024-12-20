import React from 'react';
import "../App.css"; // Importing the CSS file
import mimg from "../img/mainimg7.png" 
import { useNavigate } from 'react-router-dom';

const MainApp = () => {
    const navigate = useNavigate();
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Welcome to Your Expense Tracker</h1>
        <p className="intro">Hello, I'm Priyanshu Trivedi!</p>
      </header>
      <main className="app-main">
        
        <img src={mimg} alt='main' id='img-main'></img>
        <button onClick={()=>{
            navigate("/signup")
        }}>Signup</button>
        <section className="benefits">
          <h2>Why Track Your Expenses?</h2>
          <ul>
            <li>Gain a clear understanding of your spending habits.</li>
            <li>Identify areas where you can cut back and save money.</li>
            <li>Set and achieve financial goals with ease.</li>
            <li>Reduce financial stress and improve your overall well-being.</li>
            <li>Make informed decisions about your future investments.</li>
          </ul>
        </section>
      </main>
      <footer className="app-footer">
        <p>Start your journey towards financial freedom today!</p>
        <p> Enter <h3 className='amountrep'>(-amount) like:- (-300)</h3> to show expense
        </p>
      </footer>
      
    </div>
  );
};

export default MainApp;