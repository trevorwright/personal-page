import React from 'react'
import { withSiteData } from 'react-static'

import { SectionHeader, PageSection, ImageBlurb } from '../components/common'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'

import trevorImage from '../../assets/images/trevor-wright.png'

export default withSiteData(() => (
  <div>
    <Navigation />
    <Hero />
    <PageSection center>
      <SectionHeader>About Me</SectionHeader>
      <ImageBlurb image={trevorImage} alt="Profile Image of Trevor Wright">
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, id fusce morbi aliquam ultrices
          nisi venenatis, proin potenti odio tincidunt tempus volutpat. Mus amet aliquet vehicula
          lacinia penatibus dui rhoncus nisi nostra viverra taciti adipiscing, id fermentum sem
          faucibus facilisi maecenas inceptos euismod platea urna porttitor class, habitasse cursus
          habitant tempor commodo aenean fusce erat gravida litora etiam. Dictum vehicula nulla
          augue justo habitasse ac ad, elit suscipit at himenaeos nam ut pharetra ornare, aliquam
          blandit commodo lectus aptent mauris.
        </p>
        <p>
          Justo dolor scelerisque ultrices conubia arcu rutrum ornare leo cras egestas, litora
          ligula in mollis inceptos rhoncus cursus fames class, porta risus vel nisl congue eu
          dictum mus eget. Malesuada gravida blandit fringilla litora interdum, conubia nisl viverra
          vehicula, taciti porttitor praesent leo. Dis velit netus consectetur adipiscing torquent
          orci nam neque sociosqu, pharetra penatibus risus hendrerit integer tristique maecenas
          magnis, malesuada lectus vulputate imperdiet sit dolor eleifend etiam. Viverra erat ac
          natoque eleifend libero nisi arcu purus montes, nec habitasse proin integer velit bibendum
          placerat facilisis, dictum penatibus massa vel lorem nulla ornare vehicula.
        </p>
      </ImageBlurb>
    </PageSection>
  </div>
))
