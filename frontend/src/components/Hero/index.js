import React, {useState} from 'react';
import NavBar from '../Navbar';
import SideBar from '../SideBar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP } from './HeroElements';

const Hero = () => {
  const [isOpen,setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    }


    return (
      <HeroContainer>
          <NavBar toggle={toggle} />
          <SideBar isOpen={isOpen} toggle={toggle} />
          <HeroContent>
            <HeroItems>
              <HeroH1>Greatest Restaurants Ever</HeroH1>
              <HeroP>You Can Rate Here...</HeroP>
              <HeroP>Qualities that every restaurant needs to be if it’s going to succeed.</HeroP>
            </HeroItems>
          </HeroContent>
      </HeroContainer>
    );
};

export default Hero;
