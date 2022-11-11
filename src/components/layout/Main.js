import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <nav className='text-end'>
                <Link className='btn btn-sm btn-outline-primary' to='/login'>Login</Link>
                <Link className='btn btn-sm btn-success mx-2' to='/register'>Register</Link>
            </nav>
                <Outlet></Outlet>
        </div>
    );
};

export default Main;