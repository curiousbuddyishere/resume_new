import React from 'react';

const SocialLinks = () => {
  const links = [
    { label: 'x', href: '#' },
    { label: 'linkedin', href: '#' },
    { label: 'github', href: '#' },
    { label: 'instagram', href: '#' },
    { label: 'rss', href: '#' },
  ];

  return (
    <div className="flex justify-center space-x-4 font-mono text-sm">
      {links.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          className="text-[#4444aa] hover:text-[#6666cc]"
        >
          [{label}]
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 