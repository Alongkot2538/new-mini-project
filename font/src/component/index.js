import React, { useState, useEffect } from 'react';
import Login from './Login'
import auth from '../firebase';
import Navbar from './Navbar'

export default function Index() {

    return (
        <div>
            <div class="row">
                <div class="col-sm-8">
                    <img src="https://www.wegointer.com/wp-content/uploads/2017/10/books1.jpg" width="100%" height="738" />
                </div>
                <div class="col-sm-4">


                    <div class="body">
                        <div class="form-signin">


                            <h2 class="form-signin-heading">Please Login</h2>
                            {/* <p1>{username} {password}</p1> */}



                            <a href="/User"><button class="btn btn-lg btn-primary btn-block"> Login</button></a>
                            <br />
                            <a href="/Admin"><button class="btn btn-lg btn-primary btn-block"> Admin</button></a>
                            {/* <div style={{textAlign:"center"}}> <a href="/">Home</a></div> */}
                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}
