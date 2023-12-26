import React from 'react';
import { Navbar } from '../components/Navbar';
import { Banner } from '@/components/BannerHome';
import { Card } from '@/components/Cards';
import { Footer } from '@/components/Footer';
import { MainWidth } from "@/components/MainWidth"

export const Home = () => {
    return (
        <div>
            <MainWidth >
            <Navbar />
            <Banner />
            <Card />
            </MainWidth >
            <Footer />
        </div>
        );
    };