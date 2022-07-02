import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GithubIcon from '@mui/icons-material/GitHub'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href='https://www.linkedin.com/in/sabinezilde'><LinkedInIcon /></a>
        <a href="https://github.com/SabineZilde"><GithubIcon /></a>
      </div>
      <p> &copy; 2022 kalibrize.com</p>
    </div>
  )
}

export default Footer