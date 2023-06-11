import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        
<div class="error-contain">
	<div class="error-text">
		<h1>404</h1>
		<p>Page not found.</p>
		<p>We searched high and low.</p>
	</div>
	<div class="binoculars">
		<div class="back-bino"></div>
		<div class="left-bino"></div>
		<div class="right-bino"></div>
		<div class="left-bino-lense">
			<div class="eye"></div>
		</div>
		<div class="right-bino-lense">
			<div class="eye"></div>
		</div>
	</div>
    <Link to='/'><button className='btn btn-danger d-flex mx-auto'>Go to home</button></Link>
</div>
    );
};

export default NotFound;