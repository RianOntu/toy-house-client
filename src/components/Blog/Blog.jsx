import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-5 mb-5'>
            <h1 className='mt-5 mb-5 text-center'>Blog</h1>
            <p><b>Question:</b>What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
            <p><b>Answer:</b>An access token is a credential that represents the authorization granted to a client application to access protected resources on behalf of a user. It is typically issued by an authentication server after the user has successfully authenticated and authorized the application.A refresh token is a long-lived credential that is used to obtain a new access token when the current one expires. It is securely issued alongside the access token during the initial authentication process.</p>
            <p><b>Question:</b>Compare SQL and NoSQL databases?</p>
            <p><b>Answer:</b>SQL databases, also known as Relational Database Management Systems (RDBMS), are based on a structured schema.On the other hand NoSQL databases, or Not Only SQL databases, are designed to handle unstructured, semi-structured, or rapidly changing data.</p>
            <p><b>Question:What is express js? What is Nest JS?</b></p>
            <p><b>Answer:</b>Express.js is a fast, minimalist, and flexible web application framework for Node.js. It provides a set of robust features and utilities for building web applications and APIs.And Nest.js, on the other hand, is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. </p>
            <p><b>Question:</b>What is MongoDB aggregate and how does it work?</p>
            <p><b>Answer:</b>
In MongoDB, the aggregate framework is a powerful feature that allows for advanced data processing and analysis. It enables users to perform complex data manipulations, transformations, and aggregations on collections of documents.</p>
        </div>
    );
};

export default Blog;