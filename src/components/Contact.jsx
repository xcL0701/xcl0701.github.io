import React from 'react';
import { FaBehance, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiGmail, SiMicrosoftoutlook } from 'react-icons/si';
import { styles } from '../styles';

const Contact = () => {
  return (
    <div>
      <h2 className={`${styles.paddingX} ${styles.sectionHeadText} text-center`}>Contact Me</h2>
      <div className="bg-primary p-6 text-white flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">

          {/* Left Column */}
          <div className="space-y-8">

            {/* Outlook */}
            <div className="flex items-center justify-start md:justify-start space-x-4">
              <SiMicrosoftoutlook className="w-12 h-12" />
              <div className="text-left whitespace-normal break-words">
                <h3 className="text-lg font-bold">Outlook</h3>
                <a href="mailto:nicholas.williem@binus.ac.id" className="text-sm hover:underline">
                  nicholas.williem@binus.ac.id
                </a>
              </div>
            </div>

            {/* Gmail */}
            <div className="flex items-center justify-start md:justify-start space-x-4">
              <SiGmail className="w-12 h-12" />
              <div className="text-left whitespace-normal break-words">
                <h3 className="text-lg font-bold">Gmail</h3>
                <a href="mailto:vincentwilliem0511@gmail.com" className="text-sm hover:underline">
                  vincentwilliem0511@gmail.com
                </a>
              </div>
            </div>

            {/* Behance */}
            <div className="flex items-center justify-start md:justify-start space-x-4">
              <FaBehance className="w-12 h-12" />
              <div className="text-left whitespace-normal break-words">
                <h3 className="text-lg font-bold">Behance</h3>
                <a href="http://behance.net/nicholaswilliem" target="_blank" rel="noreferrer" className="text-sm hover:underline">
                  http://behance.net/nicholaswilliem
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">

            {/* GitHub */}
            <div className="flex items-center space-x-4">
              <FaGithub className="w-12 h-12" />
              <div className="whitespace-normal break-words text-left !important">
                <h3 className="text-lg font-bold">GitHub</h3>
                <a href="https://github.com/xcL0701" target="_blank" rel="noreferrer" className="text-sm hover:underline">
                  https://github.com/xcL0701
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center space-x-4">
              <FaLinkedin className="w-12 h-12" />
              <div className="whitespace-normal break-words text-left !important">
                <h3 className="text-lg font-bold">LinkedIn</h3>
                <a href="http://linkedin.com/in/nicholas-abel-williem-0097331b7/" target="_blank" rel="noreferrer" className="text-sm hover:underline">
                  http://linkedin.com/in/nicholas-abel-williem-0097331b7/
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center space-x-4">
              <FaWhatsapp className="w-12 h-12" />
              <div className="whitespace-normal break-words text-left !important">
                <h3 className="text-lg font-bold">WhatsApp</h3>
                <a href="https://wa.me/628123456789" target="_blank" rel="noreferrer" className="text-sm hover:underline">
                  +62 812-3456-789
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
