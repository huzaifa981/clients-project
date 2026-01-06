import { Instagram, Linkedin, Facebook } from 'lucide-react';

const AppShowcase = () => {
  const socialLinks = [
    {
      name: "Motion Design Projects",
      href: "#", // Add your Google Drive link here
      color: "bg-[#222222] hover:bg-[#333333]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.3 78" className="w-12 h-12">
          <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.9 2.5 3.2 3.3l-13.65-23.8h27.3l-3.85-6.65-9.85-17.1-9.9 17.1-3.2 5.55h.1z" fill="#0066da" />
          <path d="m43.65 25-13.65-23.8c-1.3.8-2.4 1.9-3.2 3.3l-9.85 17.1 13.65 23.8 3.85-6.65 9.85-17.1 3.2-5.55-3.85 8.9z" fill="#00ac47" />
          <path d="m73.55 76.8c1.3-.8 2.4-1.9 3.2-3.3l9.85-17.1-13.65-23.8-3.85 6.65-9.85 17.1-3.2 5.55h27.3z" fill="#ea4335" />
          <path d="m43.65 25 13.65 23.8-13.65 23.8h-27.3l13.65-23.8z" fill="#00832d" />
          <path d="m59.8 53.25-3.2-5.55-9.85-17.1-13.65-23.8h19.7c1.5 0 2.95.4 4.2 1.1l13.65 23.8z" fill="#ffba00" />
        </svg>
      ),
    },
    {
      name: "Graphic Design Projects",
      href: "#",
      color: "bg-[#222222] hover:bg-[#333333]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.3 78" className="w-12 h-12">
          <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.9 2.5 3.2 3.3l-13.65-23.8h27.3l-3.85-6.65-9.85-17.1-9.9 17.1-3.2 5.55h.1z" fill="#0066da" />
          <path d="m43.65 25-13.65-23.8c-1.3.8-2.4 1.9-3.2 3.3l-9.85 17.1 13.65 23.8 3.85-6.65 9.85-17.1 3.2-5.55-3.85 8.9z" fill="#00ac47" />
          <path d="m73.55 76.8c1.3-.8 2.4-1.9 3.2-3.3l9.85-17.1-13.65-23.8-3.85 6.65-9.85 17.1-3.2 5.55h27.3z" fill="#ea4335" />
          <path d="m43.65 25 13.65 23.8-13.65 23.8h-27.3l13.65-23.8z" fill="#00832d" />
          <path d="m59.8 53.25-3.2-5.55-9.85-17.1-13.65-23.8h19.7c1.5 0 2.95.4 4.2 1.1l13.65 23.8z" fill="#ffba00" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shahbaz-khan-8a0a8039b/",
      color: "bg-[#0077b5] hover:bg-[#006399]",
      icon: <Linkedin className="w-12 h-12 text-white" />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/189XXuobaW/",
      color: "bg-[#1877F2] hover:bg-[#166fe5]",
      icon: <Facebook className="w-12 h-12 text-white" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/sh.khan1111?",
      color: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90",
      icon: <Instagram className="w-12 h-12 text-white" />,
    },
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
