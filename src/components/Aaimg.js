// heroData.js
import hero1 from '../assets/hero1.png';
import about from '../assets/Me/about.png';
import hr from '../assets/Me/hero1.png';
import cv from '../assets/cv.pdf';

import { DownloadIcon, Mail } from 'lucide-react';
import { FaInstagram, FaLinkedinIn, FaYoutube, FaGithub } from 'react-icons/fa';
import { ChartBarIcon } from '@heroicons/react/24/solid';

export const assets = { hero1, about, hr, cv, DownloadIcon, Mail };

export const socialIcons = [
    { 
        icon: FaGithub, 
        alt: 'Github', 
        href: "https://github.com/shashikanthmbhat"
    },
    { 
        icon: ChartBarIcon, 
        alt: 'PowerBI', 
        href: "https://app.powerbi.com/home?experience=power-bi"
    },
    { 
        icon: FaLinkedinIn, 
        alt: 'LinkedIn', 
        href: "https://linkedin.com/in/Shashikanth_Bhat"
    },
    { 
        icon: FaYoutube, 
        alt: 'Youtube', 
        href: "https://www.youtube.com/@shashikanthbhat1684"
    },
    { 
        icon: FaInstagram, 
        alt: 'Instagram', 
        href: "https://www.instagram.com/the_dead_weight_dumber?igsh=aWwzdGJjeGk4Ym13"
    },
];

export const themes = {
    dark: {
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        buttonSecondary: 'text-white border-2 border-blue-500 hover:bg-blue-600',
        decorativeCircle: 'bg-blue-500 opacity-10'
    },
    light: {
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-700',
        buttonSecondary: 'text-gray-800 border-2 border-blue-500 hover:bg-blue-500 hover:text-white',
        decorativeCircle: 'bg-orange-400 opacity-20'
    }
};
