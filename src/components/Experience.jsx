import React from 'react';

const Experience = () => (
    <section id="experience" className="container mx-auto my-8 px-4">
        <h2 className="text-3xl font-bold mb-4">Experience</h2>

        <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Senior Full-Stack Developer, Reggora – Boston, Ma</h3>
            <p className="text-gray-700">Finance Operations Team</p>
            <p className="text-gray-700">June 2021 - August 2023</p>
            <p>
                Spearheaded the architecture and implementation of comprehensive end-to-end
                features for the Reggora system,
                a prominent platform known for facilitating rapid appraisal turnaround times to
                expedite the process of securing mortgage loans.
                These features were instrumental in processing payments and ensuring the
                integrity of client relationships and financial data.
            </p>
        </div>

        <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">React Developer II, Priority Payments – Atlanta,
                Ga</h3>
            <p className="text-gray-700">Lead Developer - Commercial Payments Exchange</p>
            <p className="text-gray-700">May 2019 - February 2021</p>
            <p>
                Architected and implemented large end-to-end features for the React/Redux client
                and the NodeJS/Restify backend of the CPX system leveraged to process virtual
                payments and maintain client relationships and financial data.
            </p>
        </div>

        <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Senior Software Engineer, The Home Depot –
                Atlanta, Ga</h3>
            <p className="text-gray-700">Lead Developer - Agile Metrics Team</p>
            <p className="text-gray-700">April 2016 - April 2019</p>
            <p>
                Led a cross-functional team of four engineers as the lead engineer, product
                manager, and designer to architect and implement a system utilized by internal
                software development teams for assessing adherence to agile development
                processes.
            </p>
        </div>

    </section>
);

export default Experience;
