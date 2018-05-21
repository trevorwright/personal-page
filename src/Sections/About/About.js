import React from 'react'
import { ImageBlurb } from '../../components/common'

import trevorImage from '../../../assets/images/trevor-wright.png'

const About = () => (
  <ImageBlurb image={trevorImage} alt="Profile Image of Trevor Wright">
    <p>
      I have been developing modern software solutions for the last decade on multiple platforms
      using a wide variety of technologies. Mentoring and leadership play a huge part in my career,
      helping team members fine tune and advance their skillset. Learning is a massive passion as
      there is always a new approach, point of view, or technology to improve the work you do.
    </p>
    <p>
      I want to continually push our industry forward by enabling teams to do amazing work more
      efficiently than ever and find new solutions for the problems we face. The world of web
      technologies is rapidly evolving and I strive to stay on the cutting edge of it.
    </p>
    <p>
      Outside of work I love spending time with my beautiful girlfriend, embarking on any adventure
      we can find together. I enjoy the Canadian summers on the golf course, and the winters on the
      ski slopes. I also love cooking as a hobby and as a means of avoiding starvation.
    </p>
  </ImageBlurb>
)

export default About
