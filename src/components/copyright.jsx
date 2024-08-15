import React from 'react'
import '../components/style.css'


function copyright() {
  const c_year = new Date().getFullYear();
  console.log(c_year);
  return (
    // style in general css file in components
    <div>
      <footer>
      <p>copyright © {c_year}</p>
      </footer>
    </div>
  )
}

export default copyright
