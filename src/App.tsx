import { useState } from 'react'
import reasons from '/107reasons.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Oglebee Solutions</h1>
      <div>
        <a href="https://pilotinstitute.com/part-107-reasons/" target="_blank">
          <img src={reasons} className="logo" alt="React logo" />
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
        Please bear with us as we continue to build and improve our website. In the meantime, feel free to contact us for any inquiries or drone-related services.
        </p>
      </div>
      <a href="mailto:oglebee2023@gmail.com&subject=Inquiry">oglebee2023@gmail.com</a>
    </>
  )
}

export default App
