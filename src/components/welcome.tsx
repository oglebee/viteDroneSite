import React, { useState } from "react";
import reasons from '/107reasons.svg'


const WelcomeSection = () => {
    const [count, setCount] = useState(0)
    return (
        <section className="welcome-section">
            <h1 className='company'>Oglebee Solutions</h1>
            <div className='reasonsLink'>
            <a href="https://pilotinstitute.com/part-107-reasons/" target="_blank">
                <img src={reasons} className="reasons" alt="React logo" />
            </a>
            <span className='text-next-to-svg'>There are many reasons why a part 107 certificate is essential when looking for drone partners.</span>
            </div>
            <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p>
                Welcome to Oglebee Solutions, your trusted partner in drone services. Our team is dedicated to providing high-quality drone solutions for various industries. Whether it's aerial photography, surveying, or inspections, we have you covered.
            </p>
            <p>
            We are proud to announce that we are Part 107 certificated, ensuring that our operations meet the highest safety and regulatory standards.
            </p>
            <p>
                Please feel free to contact us for any questions or concerns you may have about proper drone usage and we will be sure to get back to you promptly.
            </p>
            </div>
            <a href="mailto:oglebee2023@gmail.com?subject=Inquiry" className='email'>oglebee2023@gmail.com</a>
        </section>
);
};

export default WelcomeSection;