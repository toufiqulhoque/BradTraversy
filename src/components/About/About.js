import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../shared/Card';

const About = () => {
    return (
        <Card>
           <Link to='/'>
           Back to home
           </Link>
        </Card>
    );
};

export default About;