import { useEffect } from 'react';
import KUTE from 'kute.js'
import { Visibility } from '@mui/icons-material';
require('kute.js/kute-svg')

const MyComponent = () => {
    useEffect(() => {
    const tween = KUTE.fromTo(
        '#blob1',
        { path: '#blob1' },
        { path: '#blob2' },
        { repeat: 999, duration: 3000, yoyo: true }
    ).start();
    }, []);

    return (
        <svg id="visual" 
        viewBox="0 0 960 300" 
        width="960" 
        height="300" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        version="1.1"
        >
            <g transform="translate(466.9100322706401 142.8760165869106)">
                <path className="blob1"
                    d="M78.2 -103C102 -90.4 122.3 -68.4 123.9 -44.7C125.5 -21 108.4 4.3 98 30.4C87.5 56.5 83.7 83.2 68.5 101.6C53.3 120 26.6 130 -1.2 131.6C-29 133.2 -58 126.5 -75.1 108.7C-92.2 90.9 -97.5 62.2 -97.8 37.4C-98.2 12.6 -93.7 -8.2 -89 -30.9C-84.3 -53.6 -79.5 -78.2 -64.6 -93.7C-49.8 -109.2 -24.9 -115.6 1.2 -117.2C27.2 -118.8 54.5 -115.6 78.2 -103" 
                    fill="#BB004B"
                ></path>
            </g>
            <g transform="translate(484.50058253516175 152.58277566611622)">
                <path className="blob2"
                    d="M116.5 -144.6C144.9 -139.8 157.6 -97.6 161.7 -58.7C165.8 -19.9 161.4 15.6 150.7 49.2C140.1 82.8 123.2 114.6 97.1 128.5C70.9 142.3 35.5 138.1 -0.3 138.5C-36.1 139 -72.1 143.9 -104.6 132.1C-137.1 120.4 -166 91.9 -171.3 59.5C-176.6 27.1 -158.2 -9.2 -134.7 -32.1C-111.2 -55.1 -82.7 -64.8 -59.4 -71.3C-36.1 -77.7 -18 -81.1 13 -99C44.1 -116.9 88.2 -149.5 116.5 -144.6" 
                    fill="#BB004B"
                ></path>
            </g>
        </svg>
    );
}

export default MyComponent;