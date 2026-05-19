import { Instagram, Linkedin, Facebook } from 'lucide-react';

const AppShowcase = () => {
  const socialLinks = [
    {
      name: "Motion Design Projects",
      href: "https://drive.google.com/drive/folders/1lVhrzy0GuxKWxte9tOU7QaQdkrEoRBCy?usp=sharing", // Add your Google Drive link here
      color: "bg-[#222222] hover:bg-[#333333] text-white",
      icon: (
        <i className="fa-brands fa-google-drive" style={{ fontSize: "50px", color: "white" }}></i>
      ),
    },
    {
      name: "Graphic Design Projects",
      href: "https://drive.google.com/drive/folders/1HS12vzwCMaJ2Cl1d13ZqiYip2IU8GqnP?usp=sharing",
      color: "bg-[#222222] hover:bg-[#333333]",
      icon: (
        <i className="fa-brands fa-google-drive" style={{ fontSize: "50px", color: "white" }}></i>

      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shahbaz-khan-8a0a8039b/",
      color: "bg-[#0077b5] hover:bg-[#006399]",
      icon: <Linkedin className="w-12 h-12 text-white" />,
    },
    // {
    //   name: "Facebook",
    //   href: "https://www.facebook.com/share/189XXuobaW/",
    //   color: "bg-[#1877F2] hover:bg-[#166fe5]",
    //   icon: <Facebook className="w-12 h-12 text-white" />,
    // },
    // {
    //   name: "Instagram",
    //   href: "https://www.instagram.com/sh.khan1111?",
    //   color: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90",
    //   icon: <Instagram className="w-12 h-12 text-white" />,
    // },
  ];

  return (
    <div id="work" className="app-showcase py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">My Work</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center justify-center w-64 h-48 p-4 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg ${link.color}`}
            >
              <div className="text-white mb-4 transform group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <span className="text-white font-semibold text-center text-lg leading-tight">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
