import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout';
import SocialLinks from '../components/SocialLinks';

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>aishere.xyz</title>
        <meta name="description" content="Personal website" />
      </Helmet>

      <div className="flex flex-col items-start">
        <div className="max-w-[540px] space-y-6 text-gray-200 mb-8 sm:mb-16 font-mono leading-relaxed bg-light">
          <p>Hi, I'm Adnan.</p>

          <p>
            I'm a product manager, cinema lover, and the growth guy.
          </p>

          <p>
            Currently, I'm spending my time in a ecomm giant.
          </p>

          <p>
            Prior to this, I was working in a cool company building for Bharat.
          </p>

          <p>
            Feel free to poke around this website, which serves as a sampling
            of what I have been upto.
          </p>

          <div>
            <p>
              If what you find interests you, please{' '}
              <a href="mailto:adnanshamim11work@gmail.com" className="text-[#4444aa] hover:text-[#6666cc] underline">
                get in touch
              </a>.
            </p>
          </div>
        </div>

        {/* <SocialLinks /> */}
      </div>
    </Layout>
  );
};

export default Home;