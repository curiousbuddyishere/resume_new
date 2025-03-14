import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout';

const Lists = () => {
  const lists = [
    {
      title: "Quotes",
      lastUpdated: "January 3, 2025",
      slug: "quotes"
    },
    {
      title: "To read or investigate",
      lastUpdated: "January 3, 2025",
      slug: "to-read"
    },
    {
      title: "Films",
      lastUpdated: "December 8, 2024",
      slug: "films"
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Lists - Adnan Shamim</title>
        <meta name="description" content="Various categorized lists curated by Adnan Shamim" />
      </Helmet>

      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-mono mb-16">Lists</h1>
        
        <div className="w-full max-w-[540px] space-y-4">
          {lists.map((list) => (
            <div key={list.slug} className="border-b border-[#222244]">
              <a 
                href={`/lists/${list.slug}`}
                className="block py-4 group"
              >
                <h2 className="text-xl font-mono text-white group-hover:text-[#6666cc]">
                  {list.title}
                </h2>
                <p className="text-sm font-mono text-[#4444aa] mt-1">
                  Last updated: {list.lastUpdated}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Lists;