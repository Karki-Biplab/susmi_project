// src/app/component/Footer.jsx
const Footer = () => {
    return (
      <div className="bg-[var(--theme-color)] text-[var(--theme-text)] text-center py-4 mt-auto">
        {<p>&copy; {new Date().getFullYear()} Susmita Yogi. All rights reserved.</p> }
      </div>
    );
  };
  
  export default Footer;
  