import React, { useState, useEffect } from 'react';
import Login from './Login'
import auth from '../firebase';
import Navbar from './Navbar'
import Books from './Books';

export default function Home() {

    return (
        <div>
            <Navbar />
            <Books />
        </div>
    )
}
