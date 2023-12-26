import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '@/components/Footer';
import { MainWidth } from "@/components/MainWidth"

const About = () => {
    return (
        <div>
            <MainWidth>
                <Navbar />
                <Navbar />
            </MainWidth>
                <Footer />
        </div>
    );
};

export default About;