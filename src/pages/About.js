import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const About = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='about' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              porro rerum aliquam quo quaerat cupiditate dolore perferendis,
              ipsum quam repudiandae doloribus nobis quod atque vero ducimus
              aliquid id? Minima pariatur illo molestiae rerum laborum fugit
              asperiores repudiandae tenetur voluptatem non dolores quae aut,
              consequatur dignissimos. Sit eos, soluta quo corrupti id ipsum
              numquam porro molestias ab harum. Porro illum laboriosam sunt enim
              minima at cumque fugiat maxime tempore distinctio, voluptate
              officiis recusandae nulla, laborum ea adipisci. Voluptates
              quisquam similique velit voluptatibus quas ducimus sint libero
              quam ea magni! Repellat perspiciatis aliquid accusantium provident
              cupiditate ut harum deleniti! Corporis, dolores voluptates.
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default About;
