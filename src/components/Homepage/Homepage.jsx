import React from 'react'
import Navbar from '../navbar/Navbar'
import heroimage from '../../assets/heroimage.jpg'
import {icons} from '../../assets'
import CollectionCard from '../collectioncard/CollectionCard'
import './Homepage.css'
import Footer from '../footer/Footer'


function Homepage() {
  return (
    <>
    <div className='main'>
    <Navbar/>
    <div>
      <div>
        <div className='intro'>
        <h2 className='big_text'>We help you <span className='standout_text'>look and feel your best,</span> no matter what the occasion.</h2>
        <p className='intro_text'>Whether you're looking for a chic dress for your next date night, or a stylish blazer to rock your boardroom meetings, we've got something for every occasion.</p>
        <button className='intro_quiz_btn' href=
        "">Take a style quiz</button>
        </div>
        <img className='heroimage' src={heroimage} alt="brown sweater, brown boots and checkered shorts"></img>
      </div>
      <div className='aboutsection'>
        <div className='about'>
          <h3 className='about_heading'>About Style Inn</h3>
          <p className='heading_text'>We know you sometimes feel tired or overwhelmed by your wardrobe and unsure of what to wear for that special occasion. Look no further, because our expert fashion stylists are here to provide you with personalized recommendations and expert advice.</p>
          <hr></hr>
          <p className='heading_text'>Welcome to our world of fashion and style!
          We believe that everyone deserves to feel confident and stylish, and we're here to help make that a reality. From casual wear to formal attire, we've got you covered with the most sought-after designs and styles.</p>
        </div>
        <div className='about_text'>
          <div className='abouts'>
            <img src= {icons.heart} alt= "heart" />
            <p className='about_headings'>Comfort & Luxury</p>
            <p>We believe that fashion should not only look good but also feel good. Our brand is committed to providing our customers with the ultimate level of comfort while maintaining a high standard of luxury.</p>
          </div>
          <div className='abouts'>
            <img src= {icons.tag} alt="tag" />
            <p className='about_headings'>Best Prices</p>
            <p>We believe that everyone deserves to look and feel their best, without breaking the bank. TWe offer stylish and trendy clothings at prices that won't leave you with an empty wallet.</p>
          </div>
          <div className='abouts'>
            <img src= {icons.fast} alt="fast" />
            <p className='about_headings'>Fast</p>
            <p>Our friendly customer service team is always available to answer your questions and help you find the perfect outfit.</p>
          </div>
          <div className='abouts'>
            <img src= {icons.safe} alt="safe-lock" />
            <p className='about_headings'>Safe</p>
            <p>We're committed to providing you with the best possible shopping experience. We offer easy returns and exchanges, so you can shop with confidence. .</p>
          </div>
        </div>
      </div>
    </div>
    <div className='product_collection'>
      <h3>Collections</h3>
      <div>
        <h5>Women</h5>
        <div >
          <ul className='Collectioncard_list'>
            <li><CollectionCard/></li>
            <li><CollectionCard/></li>
            <li><CollectionCard/></li>
            <li><CollectionCard/></li>
          </ul>
        </div>
      </div>
      <div>
        <h5>Men</h5>
        <div >
          <ul className='Collectioncard_list'>
            <li><CollectionCard/></li>
            <li><CollectionCard/></li>
            <li><CollectionCard/></li>
            <li><CollectionCard/></li>
          </ul>
        </div>
      </div>
    </div>
    <div className='topbrands'>
      <h3 >Top Fashion Brands & Stylists</h3>
      <ul className='brands'>
        <li className='brandcard'>
          <img src="" alt="Gucci logo" />
          <p className='brandnote'>View collections</p>
        </li>
        <li className='brandcard'>
          <img src="" alt="Gucci logo" />
          <p className='brandnote'>View collections</p>
        </li>
        <li className='brandcard'>
          <img src="" alt="Gucci logo" />
          <p className='brandnote'>View collections</p>
        </li>
        <li className='brandcard'>
          <img src="" alt="Gucci logo" />
          <p className='brandnote'>View collections</p>
        </li>
        <li className='brandcard'>
          <img src="" alt="Gucci logo" />
          <p className='brandnote'>View collections</p>
        </li>
        <li className='brandcard'>
          <img src="" alt="Gucci logo" />
          <p className='brandnote'>View collections</p>
        </li>
        <li className='brandcard'>
          <img src="" alt="Gucci logo" />
          <p className='brandnote'>View collections</p>
        </li>
        <li className='brandcard'>
          <img src="" alt="Gucci logo" />
          <p className='brandnote'>View collections</p>
        </li>
        <li className='brandcard'>
          <img src="" alt="Gucci logo" />
          <p className='brandnote'>View collections</p>
        </li>
        <li className='brandcard'>
          <img src="" alt="Gucci logo" />
          <p className='brandnote'>View collections</p>
        </li>
        <li className='brandcard'>
          <img src="" alt="Gucci logo" />
          <p className='brandnote'>View collections</p>
        </li>
        <li className='brandcard'>
          <img src="" alt="Gucci logo" />
          <p className='brandnote'>View collections</p>
        </li>
      </ul>
      <div>
        <h5>Are you ready to unleash your inner fashioonista</h5>
        <p>Let’s help you with personalized recommendations and expert advice.</p>
        <button>Take a style quiz</button>
      </div>
    </div>
    {/* <Footer/> */}
    </div>
    </>
  )
}

export default Homepage
