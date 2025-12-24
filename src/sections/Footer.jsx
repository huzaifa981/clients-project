import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a key={index} href={socialImg.href} target="_blank" rel="noreferrer" className="icon">
              <img src={socialImg.imgPath} alt={socialImg.name} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Shahbaz. All rights reserved. Made by <a href="https://huzaifa-bin-khalid.netlify.app/" className="text-blue-600 hover:text-blue-500 transition-colors" target="_blank">Huzaifa</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
