import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="h-screen">
      <h1 className="text-3xl font-bold my-12 text-center">My Portfolio</h1>
      <div className="overflow-x-auto mx-24">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th className="py-10"></th>
              <th>Info Type</th>
              <th>Info Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Jubair Ahmed Junjun</td>
            </tr>

            <tr>
              <td>Email</td>
              <td>jubair.ahmed.junjun@gmail.com</td>
            </tr>

            <tr>
              <td>Phone</td>
              <td>01215487xxxxx</td>
            </tr>

            <tr>
              <td>Contact Address</td>
              <td>
                1534/B; Sayed Monzil, Sayed Shah Road,Bank Colony, Chawkbazar,
                Chattogram. (Post Code: 4203)
              </td>
            </tr>

            <tr>
              <td>Education</td>
              <td>B.Sc (hon's) in Computer Science and Engineering</td>
            </tr>

            <tr>
              <td>Linkedin Profile</td>
              <td>
                <a
                  className="link link-primary"
                  href="linkedin.com/in/jubair-ahmed-junjun-4ab6a0177/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </td>
            </tr>
            <tr>
              <td>Projects</td>
              <td>
                <ul className="list-disc text-2xl">
                  <li>
                    <a
                      className="link link-primary"
                      href="https://books-stock-market.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Book Stock Market
                    </a>
                  </li>
                  <li>
                    <a
                      className="link link-primary"
                      href="https://tourist-guide-24ebc.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Tourist Guide
                    </a>
                  </li>
                  <li>
                    <a
                      className="link link-primary"
                      href="https://movie-reviwer-react-js.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Movie Review
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Technologies </td>
              <td>
                <ul className="">
                  <li>Javascript</li>
                  <li>React JS, MongoDB, Node JS, Express</li>
                  <li>HTML-5, CSS-3, Bootstrap, Tailwind CSS framework</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Portfolio;

// import React from "react";

// const Portfolio = () => {
//   return (
//     <div className="font-jost hyphens-manual">
//       <div className="max-w-3xl p-3 mx-auto my-auto bg-gray-100 border-4 border-gray-700 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o lg:h-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 lg:mt-6 rounded-2xl print:bg-white">
//         <header className="inline-flex items-baseline justify-between w-full mb-3 align-top border-b-8">
//           <div className="block">
//             <h1 className="mb-0 text-5xl font-bold text-gray-750">
//               Thomas Leon Highbaugh
//             </h1>
//             <h2 className="m-0 ml-2 text-2xl font-semibold text-gray-700 leading-snugish">
//               Full Stack Web Development
//             </h2>

//             <h3 className="m-0 mt-2 ml-2 font-semibold text-md text-gray-550 leading-snugish">
//               San Francisco, California
//             </h3>
//           </div>
//           <div
//             className="justify-between px-3 mt-0 mb-5 text-3xl font-bold leading-none text-gray-200 initials-container bg-gray-750 print:bg-black"
//             style="padding-bottom: 1.5rem; padding-top: 1.5rem;"
//           >
//             <div className="text-center initial">T</div>
//             <div className="text-center initial">L</div>
//             <div className="text-center initial">H</div>
//           </div>
//         </header>

//         <div className="col-gap-16 md:col-count-2 print:col-count-2 md:h-letter-col-full print:h-letter-col-full col-fill-balance">
//           <section className="pb-4 mt-4 first:mt-0">
//             <div className="break-inside-avoid">
//               <section className="pb-2 mb-2 border-b-2 break-inside-avoid">
//                 <ul className="list-inside pr-7">
//                   <li className="mt-1 leading-normal text-black transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700 print:">
//                     <a href="https://thomasleonhighbaugh.me" className="group">
//                       <span className="mr-2 text-lg font-semibold text-gray-700 leading-snugish">
//                         Portfolio:
//                       </span>
//                       thomasleonhighbaugh.me
//                       <span className="inline-block font-normal text-black transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700 print:">
//                         ↗
//                       </span>
//                     </a>
//                   </li>
//                   <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700">
//                     <a
//                       href="https://github.com/Thomashighbaugh"
//                       className="group"
//                     >
//                       <span className="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
//                         Github:
//                       </span>
//                       Thomashighbaugh
//                       <span className="inline-block font-normal text-black transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700 print:">
//                         ↗
//                       </span>
//                     </a>
//                   </li>

//                   <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700">
//                     <a href="mailto:thighbaugh@zoho.com" className="group">
//                       <span className="mr-8 text-lg font-semibold text-gray-700 leading-snugish">
//                         Email:
//                       </span>
//                       thighbaugh@zoho.com
//                       <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
//                         ↗
//                       </span>
//                     </a>
//                   </li>
//                   <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700">
//                     <a href="tel:+15103095128">
//                       <span className="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
//                         Phone:
//                       </span>
//                       +1(510)309-5128
//                     </a>
//                   </li>
//                 </ul>
//               </section>
//             </div>
//           </section>
//           <section className="pb-2 pb-4 mt-4 border-b-4 first:mt-0">
//             <div className="break-inside-avoid">
//               <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
//                 SUMMARY
//               </h2>

//               <section className="mb-2 break-inside-avoid">
//                 <p className="mt-2 leading-normal text-gray-700 text-md">
//                   Full stack autodiadact with demonstrable capacity to assess
//                   and manage complex business needs and surmount obstacles in
//                   the way thereof thus producing refined and accessible work
//                   products.
//                 </p>
//               </section>
//             </div>
//           </section>
//           <section className="pb-2 pb-4 mt-4 border-b-4 first:mt-0">
//             <div className="break-inside-avoid">
//               <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
//                 EXPERIENCE
//               </h2>
//               <section className="mb-2 break-inside-avoid">
//                 <header>
//                   <h3 className="text-lg font-semibold text-gray-650 leading-snugish">
//                     Full Stack Web Developer
//                   </h3>
//                   <p className="leading-normal text-md text-gray-550">
//                     Jun 2018 &ndash; Present | Freelance
//                   </p>
//                 </header>
//                 <ul className="mt-2.1 text-md text-gray-700 leading-normal">
//                   <li>
//                     <span className="transform -translate-y-px select-none text-gray-550">
//                       &rsaquo;
//                     </span>
//                     proactively cultivated client relationships
//                   </li>
//                   <li>
//                     <span className="transform -translate-y-px select-none text-gray-550">
//                       &rsaquo;
//                     </span>
//                     designed full stack web experiences for clients
//                   </li>
//                   <li>
//                     <span className="transform -translate-y-px select-none text-gray-550">
//                       &rsaquo;
//                     </span>
//                     actively engaged with clients about specifications and
//                     designs
//                   </li>
//                   <li>
//                     <span className="transform -translate-y-px select-none text-gray-550">
//                       &rsaquo;
//                     </span>
//                     crafted literate, comprehensive source code
//                   </li>
//                   <li>
//                     <span className="transform -translate-y-px select-none text-gray-550">
//                       &rsaquo;
//                     </span>
//                     provided commentary to improve maintainability
//                   </li>
//                   <li>
//                     <span className="transform -translate-y-px select-none text-gray-550">
//                       &rsaquo;
//                     </span>
//                     fostered ongoing services to clients as requested or needed
//                   </li>
//                 </ul>
//               </section>
//             </div>
//           </section>
//           <section className="pb-2 pb-4 mt-4 border-b-4 first:mt-0">
//             <div className="break-inside-avoid">
//               <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
//                 EDUCATION
//               </h2>
//               <section className="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid">
//                 <header>
//                   <h3 className="flex-grow text-lg font-semibold text-gray-700 leading-snugish">
//                     California State University East Bay
//                   </h3>
//                   <p className="leading-normal text-md text-gray-550">
//                     2009 &ndash; 2014 | Bachelor of Arts
//                   </p>
//                 </header>
//                 <p className="mt-1 leading-normal text-md text-gray-650">
//                   <span className="font-semibold text-gray-700 text-md leading-snugish">
//                     Major:
//                   </span>
//                   Political Science
//                 </p>
//                 <p className="mt-1 leading-normal text-md text-gray-650">
//                   <span className="font-semibold text-gray-700 text-md leading-snugish">
//                     Minor:
//                   </span>
//                   Economics
//                 </p>
//                 <p className="leading-normal text-gray-700 text-md">
//                   <span className="font-semibold text-gray-700 text-md leading-snugish">
//                     GPA:
//                   </span>
//                   3.9
//                 </p>
//               </section>
//               <section className="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid">
//                 <header>
//                   <h3 className="flex-grow text-lg font-semibold text-gray-700 leading-snugish">
//                     Las Positas Community College
//                   </h3>
//                   <p className="leading-normal text-md text-gray-550">
//                     2018 &ndash; Present | Associate of Science/Continuing
//                     Education
//                   </p>
//                 </header>
//                 <p className="mt-1 leading-normal text-md text-gray-650">
//                   <span className="font-semibold text-gray-700 text-md leading-snugish">
//                     Major:
//                   </span>
//                   Computer Science
//                 </p>
//                 <p className="mt-1 leading-normal text-md text-gray-650"></p>
//                 <p className="leading-normal text-gray-700 text-md">
//                   <span className="font-semibold text-gray-700 text-md leading-snugish">
//                     GPA:
//                   </span>
//                   4.0
//                 </p>
//               </section>

//               <section className="pb-4 mt-4 mb-4 break-inside-avoid">
//                 <header>
//                   <h3 className="flex-grow text-lg font-semibold text-gray-700 leading-snugish">
//                     Codify Academy
//                   </h3>
//                   <p className="leading-normal text-md text-gray-550">
//                     2018 | Certificate
//                   </p>
//                 </header>
//                 <p className="mt-1 leading-normal text-md text-gray-650">
//                   <span className="font-semibold text-gray-700 text-md leading-snugish">
//                     Subject:
//                   </span>
//                   Front End Development
//                 </p>
//               </section>
//             </div>
//           </section>
//           <section className="pb-2 pb-4 mt-4 border-b-4 first:mt-0">
//             <div className="break-inside-avoid">
//               <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
//                 PROJECTS
//               </h2>
//               <section className="pb-4 mb-4 border-b-2 break-inside-avoid">
//                 <header>
//                   <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
//                     <a
//                       href="https://github.com/WebPraktikos/universal-resume"
//                       className="group"
//                     >
//                       Portfolio Website
//                       <span className="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
//                         ↗
//                       </span>
//                     </a>
//                     <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
//                       <a href="https://github.com/Thomashighbaugh/ThomasLeonHighbaugh-Personal-Site">
//                         <i className="fab fa-github"></i>
//                       </a>
//                     </span>
//                   </h3>
//                   <p className="leading-normal text-md text-gray-550">
//                     Since 2019 | JSX, React, Next.js, SCSS
//                   </p>
//                 </header>
//                 <p className="mt-2.1 text-md text-gray-700 leading-normal">
//                   A unique and streamlined developer portfolio site that
//                   combines the useful aspect of development portfolios with a
//                   blog using Next.js. Interface is clean and features graphics
//                   designed personally for use within the site.
//                 </p>
//               </section>
//               <section className="pb-4 mb-4 border-b-2 break-inside-avoid">
//                 <header>
//                   <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
//                     <a
//                       href="https://github.com/WebPraktikos/tailwindcss-rich-docs"
//                       className="group"
//                     >
//                       Keeper CRM
//                       <span className="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
//                         ↗
//                       </span>
//                     </a>
//                     <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
//                       <a href="https://github.com/Thomashighbaugh/mern-contact-keeper">
//                         <i className="fab fa-github"></i>
//                       </a>
//                     </span>
//                   </h3>
//                   <p className="leading-normal text-md text-gray-550">
//                     2021 | MERN
//                   </p>
//                 </header>
//                 <p className="mt-2.1 text-md text-gray-700 leading-normal">
//                   Written as part of the process of learning the MERN stack,
//                   this application stores contacts for registered users and
//                   saves the information they input between sessions.
//                 </p>
//               </section>
//               <section className="pb-4 mb-4 border-b-2 break-inside-avoid">
//                 <header>
//                   <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
//                     <a
//                       href="https://g5-blog-ccl-ife.vercel.app/"
//                       className="group"
//                     >
//                       Crazy-Wise Gatsby Starter
//                       <span className="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
//                         ↗
//                       </span>
//                     </a>
//                     <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
//                       <a href="https://github.com/Thomashighbaugh/crazy-wise-gatsby-starter">
//                         <i className="fab fa-github"></i>
//                       </a>
//                     </span>
//                   </h3>
//                   <p className="leading-normal text-md text-gray-550">
//                     2020 | React, Styled Components, Gatsby.js
//                   </p>
//                 </header>
//                 <p className="mt-2.1 text-md text-gray-700 leading-normal">
//                   A starter blog for Gatsby.js that has tinaCMS integrated into
//                   development server to ease the production of content and a
//                   very distinct appearance that is both modern and functional.
//                   All graphics used in the page heroes are custom pieces made
//                   for the site.
//                 </p>
//               </section>
//               <section className="mb-2 break-inside-avoid">
//                 <header>
//                   <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
//                     <a
//                       href="https://github.com/Thomashighbaugh/Opitx/releases"
//                       className="group"
//                     >
//                       Opitx Markdown Editor
//                       <span className="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
//                         ↗
//                       </span>
//                     </a>
//                     <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
//                       <a href="https://github.com/Thomashighbaugh/Opitx/releases">
//                         <i className="fab fa-github"></i>
//                       </a>
//                     </span>
//                   </h3>
//                   <p className="leading-normal text-md text-gray-550">
//                     2019 | Electron, React, SCSS
//                   </p>
//                 </header>
//                 <p className="mt-2.1 text-md text-gray-700 leading-normal">
//                   An answer to a personal problem with Markdown editors avalable
//                   on Linux which provided a less than transparent process of
//                   saving in user defined locations that evolved into a Markdown
//                   editor written using electron and packaged for all major Linux
//                   distributions.
//                 </p>
//               </section>
//             </div>
//           </section>
//           <section className="pb-4 mt-4 first:mt-0">
//             <div className="break-inside-avoid">
//               <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
//                 SKILLS
//               </h2>
//               <section className="mb-2 break-inside-avoid">
//                 <header>
//                   <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
//                     Full Stack Web Development
//                   </h3>
//                 </header>

//                 <div className="my-1 last:pb-1">
//                   <ul className="flex flex-wrap text-sm2 leading-relaxed -mr-1.6 -mb-1">
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       HTML5
//                     </li>
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       CSS3
//                     </li>
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       SCSS
//                     </li>

//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       Tailwind.css
//                     </li>
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       LESS
//                     </li>
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       Javascript
//                     </li>

//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       Typescript
//                     </li>
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       Node.js
//                     </li>
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       JSX
//                     </li>
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       React
//                     </li>
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       React-Router
//                     </li>

//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       Next.js
//                     </li>
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       Redux
//                     </li>
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       Vue
//                     </li>
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       Express.js
//                     </li>
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       NoSQL
//                     </li>
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       MongoDB
//                     </li>
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       MERN
//                     </li>
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       PHP
//                     </li>
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       LAMP
//                     </li>
//                   </ul>
//                 </div>
//               </section>

//               <section className="mb-2 break-inside-avoid">
//                 <header>
//                   <h3 className="font-semibold text-gray-700 text-m leading-snugish">
//                     DevOps
//                   </h3>
//                 </header>
//                 <div className="my-1 last:pb-1">
//                   <ul className="flex flex-wrap text-sm2 leading-relaxed -mr-1.6 -mb-1">
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       Docker
//                     </li>
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       Docker-Compose
//                     </li>

//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       Version Control
//                     </li>
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       Git
//                     </li>

//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       CI/CD
//                     </li>

//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       GitLab Pipelines
//                     </li>
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       Github Actions
//                     </li>
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       Jenkins
//                     </li>
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       AWS
//                     </li>
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       Google Cloud
//                     </li>
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       Firebase
//                     </li>
//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       Serverless Hosting
//                     </li>

//                     <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
//                       Linux
//                     </li>
//                   </ul>
//                 </div>
//               </section>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
