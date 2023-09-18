import './curvypage.css';
import AnimatedBlob from './comp.tsx';
import { NavLink } from "react-router-dom";


const CurvyPage = () => {
  return (
    <div className='curvy-main'>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&family=Roboto+Slab&display=swap" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/kute.js@2.0.0/kute.min.js"></script> 
            <section className='purple'>
                <h1>Nice Curves</h1>
                <p>Welcome to the nice curves page. This page is being built out to demonstrate Oglebee Solutions' website building abilities. Please feel free to check out our scroll portfolio to see all the interesting features that can be implemented into your website. <NavLink to='/catpage'>Contact Us</NavLink> us for details.</p>
                <div className='curve'></div>
            </section>
            <section className='bubble'>
                <h1>Border Radius</h1>
                <p>These first designs are done with by modifying the border radius. By entering two percentage values for the radius you are giving it an X and Y transformation resulting in an ellipse. By making two surfboard shape ellipses, aligning them on a section border and coloring each one to match the above and below section's color, you can achieve this rough sorta-sinal wave. The bubble below is just a simple top-border radius change.</p>
            </section>
            <section className='orange'>
                <h1>Wave SVG</h1>
                <p>That first wave is neat but it is a bit ugly and difficult to change around as there are a lot of factors involved with the positioning. 
                    CSS is already fun enough without calc/trig.  
                    You will also notice that it scales a bit weird to small screens. This is with me tweaking it for the smaller sizes.
                    The smooth wave below is an svg created using <a href="https://www.shapedivider.app/">Shapedivider</a>. 
                    This app gives a graphical way to change the picture and formatting help for multiple screen sizes. This looks nicer.
                </p>
            </section>
            <section className='red'>
                <h1>Fancy Waves</h1>
                <p>This fancier wave below is created using <a href="https://app.haikei.app/">haikei.</a> 
                    This app has all sorts of fun tools to make interesting graphics. 
                    Lining up the outer colors provides a smooth transition between sections on a website.
                </p>
                <div className="wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>
            <div className="spacer layer1" />  
            <div className="spacer layer2 flip" />
            <section className='pink blob-container'>
                <div className='blob-content'>
                    <h1>Blob</h1>
                    <p>Animations are a great way to make a page more interesting. 
                        This simple blob animation was also made with <a href="https://app.haikei.app/">haikei.</a>. 
                        Many types of transformations can be achieved with this. 
                        Buttons or sliders changing shape. Animating movement for actions like download or page transitions.
                    </p>
                </div>
                <div className='blob'>
                    <AnimatedBlob />
                </div>
                
            </section>
            <div className="spacer layer2" />

            <section>
                <h1>Nice Curves</h1>
                <p>Placeat veniam soluta nihil iure libero alias! Laboriosam, facilis nobis accusantium, harum unde quibusdam, nesciunt voluptates cum aliquam doloremque necessitatibus autem quas repellat similique temporibus commodi velit hic tenetur. Esse!</p>
            </section>
            <section>
                <h1>Nice Curves</h1>
                <p>Officiis molestias quas hic atque facere itaque assumenda voluptates asperiores incidunt quos tempore dicta distinctio minima eaque non sequi autem illum deserunt iusto optio, quia eius accusamus. Eaque, odit quisquam!</p>
            </section>
            <section>
                <h1>Nice Curves</h1>
                <p>Ea, voluptas vero hic odit ducimus veniam alias provident laborum qui animi nemo nostrum eligendi quam quaerat ut consequuntur, aperiam quae ab illum impedit amet dolore? Deleniti consectetur dolor ut.</p>
            </section>
    </div>
  );
};

export default CurvyPage;