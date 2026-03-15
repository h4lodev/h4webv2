import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-white mt-10">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <p className="">
            &copy; {new Date().getFullYear()} H4LO Technologies. All rights reserved.
          </p>
      </div>
    </footer>
  );
};

export default Footer;
