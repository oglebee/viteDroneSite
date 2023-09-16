import { useEffect, useRef } from 'react';
import KUTE from 'kute.js';
import './comp.css';

const MyComponent = () => {
    const myElement = useRef(null);
    const secondGStyle: React.CSSProperties = {
        visibility: 'hidden',
    };

    useEffect(() => {
        if (myElement.current) {
            const tween = KUTE.fromTo(
                '#blob1',
                { path: '#blob1' },
                { path: '#blob2' },
                { repeat: 999, duration: 3000, yoyo: true }
            );

            tween.start();
        }
    }, []);

    return (
        <svg
            id="visual"
            viewBox="0 0 900 600"
            width="900"
            height="600"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1">
            <g transform="translate(443.29704754312434 254.07056579243502)">
                <path id='blob1'
                    d="M98.2 -103C125.7 -70.7 145.4 -35.4 161.1 15.8C176.9 66.9 188.9 133.9 161.4 183.9C133.9 233.9 66.9 266.9 6.1 260.8C-54.7 254.7 -109.4 209.4 -137.5 159.4C-165.7 109.4 -167.3 54.7 -162 5.3C-156.7 -44.1 -144.5 -88.2 -116.3 -120.5C-88.2 -152.8 -44.1 -173.4 -4.4 -169.1C35.4 -164.7 70.7 -135.4 98.2 -103"
                    fill="#BB004B">
                </path>
            </g>
            <g transform="translate(455.69924494924163 264.64502255794787)" style={secondGStyle}>
                <path id='blob2'
                    d="M143.9 -123.1C189.7 -98.1 232.4 -49 231.5 -0.8C230.7 47.4 186.4 94.8 140.6 133.3C94.8 171.8 47.4 201.4 -11.7 213C-70.7 224.7 -141.4 218.4 -186.8 179.9C-232.1 141.4 -252 70.7 -239 13.1C-225.9 -44.5 -179.8 -89.1 -134.4 -114.1C-89.1 -139.1 -44.5 -144.6 2.2 -146.8C49 -149 98.1 -148.1 143.9 -123.1"
                    fill="#BB004B">
                </path>
            </g>
        </svg>
    );
};

export default MyComponent;
