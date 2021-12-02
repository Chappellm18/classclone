import React from 'react';
import { Route, Routes } from 'react-router';
import Hero from './components/Hero.js';

const About = () => <h1 className="title">Welcome to About</h1>;
const Home = () => <Hero title="Welcome to Home" subtitle="This is the home page" />;
const Feed = () => <Hero title="Welcome to Feed" subtitle="This is the feed page" />;
const Users = () => <Hero title="Welcome to Users" subtitle="This is the users page" />;

export default function myroutes() {
    return (
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/home" element={<Home />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
        </Routes>
    );
}