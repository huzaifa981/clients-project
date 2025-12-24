import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";
import { contactDetail } from "../constants";

const Contact = () => {
  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-12">
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              {contactDetail.map((item, index) => {
                const Content = (
                  <div className="flex flex-col items-center gap-4">
                    <div className="text-4xl">{item.icon}</div>
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <p className="text-blue-50 text-center break-all">
                      {item.value}
                    </p>
                  </div>
                );

                return item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noreferrer"
                    className="card-border rounded-2xl p-8 w-full md:w-1/3 hover:bg-black-50 transition-colors duration-300 cursor-pointer"
                  >
                    {Content}
                  </a>
                ) : (
                  <div
                    key={index}
                    className="card-border rounded-2xl p-8 flex flex-col items-center gap-4 w-full md:w-1/3 hover:bg-black-50 transition-colors duration-300"
                  >
                    {Content}
                  </div>
                );
              })}
            </div>
          </div>
          {/* Keep the 3D model part but maybe adjust layout if needed */}
          <div className="xl:col-span-12 min-h-96 mt-10">
            <div className="bg-[#cd7c2e] w-full h-[500px] hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
