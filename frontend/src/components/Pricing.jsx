import React from 'react';
import {Check} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Pricing() {
  const pricing=[
    {
      imgurl:"pricing.jpg",
      title:"QUARTERLY",
      price:18000,
      length:3
    },
    {
      imgurl:"pricing.jpg",
      title:"HALF_YEARLY",
      price:34000,
      length:6
    },
    {
      imgurl:"pricing.jpg",
      title:"YEARLY",
      price:67000,
      length:12
    }
  ];
  return (
    <section className="pricing">
      <h1>ELITE EDGE FITNESS PLANS</h1>
      <div className="wrapper">
        {
            pricing.map(element=>{
              return(
                  <div className="card" key={element.title}>
                    <img src={element.imgurl} alt={element.title} />
                    <div className="title">
                      <h1>{element.title}</h1>
                      <h1>PACKAGE</h1>
                      <h3>Rs {element.price}</h3>
                      <p>FOR {element.length} MONTHS</p>
                    </div>
                    <div className="description">
                      <p>
                       <Check/> Eqipment
                      </p>
                      <p>
                       <Check/> All day Free Training
                      </p>
                      <p>
                       <Check/> Free Rest Room
                      </p>
                      <p>
                       <Check/> 24/7 Skilled Support
                      </p>
                      <p>
                       <Check/> 20 Days Frezzing Option
                      </p>
                      <Link to={"/"}>Join Now</Link>
                    </div>
                  </div>
              )
            })
        }
      </div>
    </section>
  )
}

export default Pricing
