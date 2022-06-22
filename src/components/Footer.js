import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GithubIcon from '@mui/icons-material/GitHub'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <LinkedInIcon />
            <GithubIcon />
        </div>
        <p> &copy; 2022 kalibrize.com</p>
    </div>
  )
}

export default Footer