import React from "react"

import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and Skills.</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>"Our chatbot's here to help! Simply ask, and discover everything you need to know about Dhrona Silambam Academy."</p>

              <div className='input flex'>
                <input type='text' placeholder='Type Your Queries' />
                <button>Chat</button>
              </div>
            </div>
          </div>

          
        </div>
      </footer>
      <div className='legal'>
        <span>© 2024 DHRONA SILAMBAM.</span>
      </div>
    </>
  )
}

export default Footer
