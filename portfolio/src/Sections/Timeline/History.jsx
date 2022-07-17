import React from 'react';
import styled from 'styled-components';

import SectionTitle from '../../Components/SectionTitle';
import Link from '../../Components/Link';
import TimeLine from './TimeLine';
import LineEvent, { Description } from './LineEvent';

const Container = styled.div`
  margin-bottom: 6rem;

  @media screen and (max-width: 650px) {
    margin-bottom: -1rem;
  }
`;

const History = () => (
  <Container id="history">
    <SectionTitle>
      Portfolio History
    </SectionTitle>

    <TimeLine>
      <LineEvent side="left" title="Release Version 2.0">
        <Description>
          This is the current version on my website.  It reflects a grayscale color scheme
          to keep things simple on the eyes yet advanced and functional.
        </Description>
      </LineEvent>
      <LineEvent side="right" title="Start Redesign for Version 2.0" date="May, 2022">
        <Description>
          After some experience with different projects and internships, I decided
          to redesign my site with a much simpler color scheme.  I also wanted to
          address some of the problems with mobile views I had seen on iPhones.
        </Description>
      </LineEvent>
      <LineEvent side="left" title="Release Version 1.0" date="">
        <Description>
          The very first version of my portfolio site. It is very bright with a design to match.
          Version 1 can be seen <Link href="/v1">here</Link>.
        </Description>
      </LineEvent>
      <LineEvent side="right" title="Begin Design for Version 1.0" date="May, 2021">
        <Description>
          I wanted to wait until the end of the school year to begin designing my site, so
          I finished teaching myself some React and decided this site would be a great way
          to continue learning.
        </Description>
      </LineEvent>
      <LineEvent side="left" title="Buy Domain" date="February, 2021">
        <Description>
          After spending some time in web programming and mobile development classes
          learning about PWAs, I decided I was ready to build my own portfolio site!
        </Description>
      </LineEvent>
    </TimeLine>
  </Container>
);

export default History;