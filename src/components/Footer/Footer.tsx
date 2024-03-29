import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import SocialList from '../SocialList/SocialList'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='footer text-center bg-black pt-8 '>
      <Wrapper>
        <Logo />
        <p className='text-[#495057] text-xs sm:text-sm mt-2 md:px-40'><span className='text-white text-sm'>Fish<span className='text-dark-teal'>Flix</span></span> - Just a better place to watch your favourite Movies and TV Shows.</p>
      </Wrapper>
      <div className='text-[#495057] py-3 text-xs border-t border-t-[#495057] mt-4'>&copy;Copyright 2023. All rights reserved.</div>
    </div>
  )
}

export default Footer