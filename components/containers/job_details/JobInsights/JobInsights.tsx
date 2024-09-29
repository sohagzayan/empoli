import React from 'react';

let titleStyle = 'font-medium text-[20px] text-purple mb-4';
let detailsStyle = 'font-normal text-[14px] leading-7';

const JobInsights = () => {
  return (
    <div className="my-10">
      <div className="flex flex-col gap-8">
        <div>
          <h3 className={`${titleStyle}`}>Job Description</h3>
          <p className={`${detailsStyle}`}>
            As a Product Designer, you will work within a Product Delivery Team
            fused with UX, engineering, product and data talent. You will help
            the team design beautiful interfaces that solve business challenges
            for our clients. We work with a number of Tier 1 banks on building
            web-based applications for AML, KYC and Sanctions List management
            workflows. This role is ideal if you are looking to segue your
            career into the FinTech or Big Data arenas.
          </p>
        </div>
        <div>
          <h3 className={`${titleStyle}`}>Key Responsibilities</h3>
          <ul className="ml-4 flex flex-col gap-4">
            <li className={`${detailsStyle} list-disc`}>
              Be involved in every step of the product design cycle from
              discovery to developer handoff and user acceptance testing.
            </li>
            <li className={`${detailsStyle} list-disc`}>
              Work with BAs, product managers and tech teams to lead the Product
              Design
            </li>
            <li className={`${detailsStyle} list-disc`}>
              Maintain quality of the design process and ensure that when
              designs are translated into code they accurately reflect the
              design specifications.
            </li>
            <li className={`${detailsStyle} list-disc`}>
              Accurately estimate design tickets during planning sessions.
            </li>
            <li className={`${detailsStyle} list-disc`}>
              Contribute to sketching sessions involving non-designersCreate,
              iterate and maintain UI deliverables including sketch files, style
              guides, high fidelity prototypes, micro interaction specifications
              and pattern libraries.
            </li>
            <li className={`${detailsStyle} list-disc`}>
              Ensure design choices are data led by identifying assumptions to
              test each sprint, and work with the analysts in your team to plan
              moderated usability test sessions.
            </li>
            <li className={`${detailsStyle} list-disc`}>
              Design pixel perfect responsive UI’s and understand that adopting
              common interface patterns is better for UX than reinventing the
              wheel
            </li>
            <li className={`${detailsStyle} list-disc`}>
              Present your work to the wider business at Show & Tell sessions.
            </li>
          </ul>
        </div>
        <div>
          <h3 className={`${titleStyle}`}>Skill & Experience</h3>
          <ul className="ml-4 flex flex-col gap-4">
            <li className={`${detailsStyle} list-disc`}>
              You have at least 3 years’ experience working as a Product
              Designer.
            </li>
            <li className={`${detailsStyle} list-disc`}>
              You have experience using Sketch and InVision or Framer X
            </li>
            <li className={`${detailsStyle} list-disc`}>
              You have some previous experience working in an agile environment
              – Think two-week sprints.
            </li>
            <li className={`${detailsStyle} list-disc`}>
              You are familiar using Jira and Confluence in your workflow
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobInsights;
