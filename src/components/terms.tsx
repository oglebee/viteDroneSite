const TermsSection = () => {
    return (
        <section className="terms-section">
            <h1>
            Terminology
            </h1>
                <p className='terms'>
                  <h2>UAS (Unmanned Aircraft System)</h2>
                  Unmanned aircraft, such as drones, controlled by an operator on the ground. The Federal Aviation Administration (FAA) uses the term UAS to reflect the fact that these systems also includes other elements aside from the actual air vehicles.
                  
                  <h2>UAS (2.4 GHz / 5.8 GHz Drone Frequency)</h2>
                  Drone remote controllers typically switch between these frequencies to provide the strongest signal with the drone and camera system. The primary differences between the two frequencies are the distance and speed. The 2.4 GHz band provides a longer transmission range but at slower speeds. The 5 GHz band provides less range but transmits data at faster speeds. The combination of these two frequencies give drones and remote controllers the power to transmit information quickly even at far distances.
                  
                  <h2>Accelerometer</h2>
                  A device that measures acceleration or fast changes in movement. The flight controller (the drone’s central processing unit) uses an accelerometer for the UAVs for flight stabilization.
                  
                  <h2>AGL (Above Ground Level)</h2>
                  Refers to the altitude above the ground immediately under the UAV. For example, a UAV flying 100 feet above a 45-foot hill would have an AGL of 55 feet.
                  
                  <h2>AMA (Academy of Model Aeronautics)</h2>
                  A nonprofit organization that advocates the safe operation of model aircraft, including drones. The AMA is a proponent of the National Model Aircraft Safety Code, a set of guidelines on the safe operation of sUAS that FAA encourages pilots to follow.
                  
                  <h2>ATC (Air Traffic Control)</h2>
                  A service provided by personnel trained and certified by the FAA responsible for monitoring and controlling all air traffic within a specific area.
                  
                  <h2>BVLOS (Beyond Visual Line of Sight)</h2>
                  The ability to operate an unmanned aircraft beyond the pilot’s line of sight. Flying UAS beyond visual line of sight requires a special permit from the FAA.
                  
                  <h2>COA (Certificate of Authorization)</h2>
                  A permit/waiver issued by the Federal Aviation Administration (FAA) allowing a public operator to perform specific UAS operations.
                  
                  <h2>Collision/obstacle Avoidance</h2>
                  A vision system that allows UAVs to detect obstacles in its path and avoid collisions.
                </p>

        </section>
);
};

export default TermsSection;