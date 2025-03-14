import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Posts = () => {
  const posts = [
    {
      title: "Under Progress",
      date: "February 24, 2025",
      slug: "about-this-website"
    }
    // {
    //   title: "Progress Report #1",
    //   date: "January 11, 2025",
    //   slug: "progress-report-1"
    // },
    // {
    //   title: "Tufte CSS",
    //   date: "December 4, 2024",
    //   slug: "tufte-css"
    // },
    // {
    //   title: "Open Questions",
    //   date: "April 7, 2024",
    //   slug: "open-questions"
    // },
    // {
    //   title: "Knowing as Inseparable from Doing",
    //   date: "March 25, 2024",
    //   slug: "knowing-doing"
    // }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Posts - Adnan Shamim</title>
        <meta name="description" content="Blog posts and articles by Adnan Shamim" />
      </Helmet>

      <h1 className="text-4xl font-mono mb-12">Posts</h1>
      
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.slug} className="border-b border-[#222244] pb-4">
            <a href="/" className="block group">
              <h2 className="text-xl font-mono mb-2 group-hover:text-[#6666cc]">
                {post.title}
              </h2>
              <p className="text-[#4444aa]">{post.date}</p>
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Posts;