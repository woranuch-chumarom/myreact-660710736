import React from 'react';
import{Link} from 'react-router-dom';

import './style/HomePage.css'

const HomePage = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <p>hello</p>
            <p>hi hi</p>
            <Link to="/books">Go to Books</Link>
        </div>
    );
}
export default HomePage;