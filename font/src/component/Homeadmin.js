import React, { useState, useEffect } from 'react';
import Login from './Login'
import auth from '../firebase';
import Navadmin from './์Navadmin'
import Books from './Books';

export default function Homeadmin() {

    return (
        <div>
            <Navadmin />
            <Books />
        </div>
    )
}
