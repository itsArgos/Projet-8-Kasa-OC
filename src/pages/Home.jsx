import React from 'react';
import { Navbar } from '../components/Navbar';
import { Banner } from '@/components/Banner';
import { ApartementCard } from '@/components/ApartementCard';
import { Footer } from '@/components/Footer';
import { MainWidth } from "@/components/MainWidth"

const Home = () => {
    return (
        <div>
            <MainWidth >
            <Navbar />
            <Banner />
            <ApartementCard />
            </MainWidth>/
            <Footer />
        </div>
        );
    };
    
    export default Home;