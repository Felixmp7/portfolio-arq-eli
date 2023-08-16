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
                '2xl': '100%',
                '3xl': '1540px'
            }
        },
        extend: {
            colors: {
                isabelline: {
                    DEFAULT: '#F8F5EF',
                    500: '#F4ECE1',
                    600: '#EEE3D2',
                    700: '#E3D1B5',
                    800: '#BC904E'
                },
                'dravys-gray': {
                    DEFAULT: '#4F5050',
                    500: '#474848',
                    600: '#3D3E3E',
                    700: '#323434'
                },
                'rose-taupe': {
                    DEFAULT: '#835155',
                    500: '#7E4E52',
                    600: '#724649',
                    700: '#653E41'
                },
                redwood: {
                    DEFAULT: '#B7545F',
                    500: '#AD4854',
                    600: '#9E424D',
                    700: '#903C46'
                },
                'indian-red': {
                    DEFAULT: '#EB5665',
                    500: '#EA4859',
                    600: '#E73648',
                    700: '#E52437'
                },
                'blue-munsel': {
                    DEFAULT: '#1B96AD',
                    500: '#198B9F',
                    600: '#167B8D',
                    700: '#136C7C'
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
