import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        container: {
            center: true,
            screens: {
                md: '100%',
                lg: '984px',
                xl: '1280px',
                '2xl': '1340px',
                '3xl': '1540px'
            }
        },
        extend: {
            colors: {
                isabelline: {
                    DEFAULT: '#F8F5EF',
                    relaxed: '#F4ECE1',
                    medium: '#EEE3D2',
                    dark: '#E3D1B5'
                },
                'dravys-gray': {
                    DEFAULT: '#4F5050',
                    relaxed: '#474848',
                    medium: '#3D3E3E',
                    dark: '#323434'
                },
                'rose-taupe': {
                    DEFAULT: '#835155',
                    relaxed: '#7E4E52',
                    medium: '#724649',
                    dark: '#653E41'
                },
                redwood: {
                    DEFAULT: '#B7545F',
                    relaxed: '#AD4854',
                    medium: '#9E424D',
                    dark: '#903C46'
                },
                'indian-red': {
                    DEFAULT: '#EB5665',
                    relaxed: '#EA4859',
                    medium: '#E73648',
                    dark: '#E52437'
                },
                'blue-munsel': {
                    DEFAULT: '#1B96AD',
                    relaxed: '#198B9F',
                    medium: '#167B8D',
                    dark: '#136C7C'
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            }
        }
    },
    plugins: []
};
export default config;
