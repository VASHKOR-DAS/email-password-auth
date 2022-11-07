import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <nav>
                <Link className='mx-2' to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <Outlet></Outlet>
            </nav>
        </div>
    );
};

export default Main;