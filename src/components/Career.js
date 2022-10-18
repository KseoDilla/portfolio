import React, { Component } from "react";
 
class Career extends Component {
  render() {
    return (
      <div class="parent">
        <h1>Career</h1>
        <h2> Safran Passenger Innovations (Jan 2015 - Jun 2022) </h2>
        <h3> DevOps Engineer (2020 - 2022) </h3>
            <ul>
                <p>I officially started as the sole Software DevOps engineer within the Software Department in 2020.
                This was not my official title but it was my day to day official role.
                <br/>
                In this role, I had led the efforts to
                solve a dilemma within the organization that would halt business operations: a Y2K
                within the product's versioning and a 32-bit limitation that impacted a major release.
                <br/>
                These two giant dilemmas would account for my first year as a DevOps engineer.
                There were a lot of legacy code that relied on 32-bit libraries, and a versioning scheme that would not support 3 digit octets.
                <br/>
                Furthermore, the company needed support building on-going releases that were 32-bit, and still maintain
                a backwards compatible versioning scheme.
                These two projects would require me to work with various teams and departments
                <br/>
                to help me deliver this solution; these teams ranged from architecture, manufacturing, 
                OEM, and the front-facing UI team.
                Through this project, my team was able to introduce containerized builds, Git, Bitbucket, and micro-services.
                <br/>
                I was also responsble for monitoring any CI/CD failures, and promoting/advocating best DevOps practices.

                <br/><br/>

                Highlights during my time as a DevOps Engineer at SPI:</p>
                <ul>
                <li>Restructured our pipeline to better support CI/CD</li>
                    <ul>
                        <li>Introduced containerized builds with docker</li>
                            <ul>
                            <li>Standardized the build across development machines</li>
                            </ul>
                        <li>Integrated Artifactory into the pipelines - deprecating an in-house repository server</li>
                        <li>Transformed services into microservices and migrated them out of SVN and into Bitbucket</li>
                    </ul>
                <li>Integrate and implemented Jenkins Shared Libraries and Jenkins Templating Engine plugin</li>
                <li>Maintained and refactored numerous legacy tools that teams were heavily reliant on</li>
                <li>Acted as the Subject Matter Expert for the company's Subversion, Jenkins, and Branch Management</li>
                </ul>
            </ul>
        <h3> Senior Software Engineer (2015 - 2022) </h3>
            <ul>
            <p> As a Software Engineer, I had learned to read and adapt the company's codebase to bring up a new project, and
            learn the processes of delivering a solution to our airline customers.
            <br/>
            <br/>
            This was the start of my career: I originally started as a Software Engineer. I was hired in mind to
            help upbring a new product within the company. I still reminisce the early days of starting at Safran Passenger Innovation.
            <br/>
            It was in these times I would meet very good colleagues, and with their help I had made memorable achievements.
            I was able to witness a successful launch of a product, and even went on a business trip by myself
            <br/>
            to a foreign speaking country where I supported the first Wireless release in an aircraft hangar!
            This was a very exciting first job, and when I look back at it I am truly grateful that I was able to work there. 
            <br/>
            <br/>

            Highlights during my time as a Software Engineer at SPI:
            </p>
                <ul>
                <li> Delivered the first standalone Wireless product with a conjoint effort of 4 different companies</li>
                    <ul>
                        <li> Redesigned the existing Software Load to be performed with a single button</li>
                        <ul>
                            <li>Prior, the software load would require an external laptop, and each additional hardware
                            to the system had to be installed in a serial effort</li>
                        </ul>
                        <li> Addressed numerous bugs ranging from UI, multi-threading, and even file corruptions all the
                        while operating within the SCRUM framework</li>
                        <li>Authored the first build pipeline for the Wireless project to officially support the product from within the US</li>
                        <ul>
                            <li>In the past the product was built in a completely different timezone within a different company's SVN project</li>
                        </ul>
                        <li> Led several follow up projects with my own team of three and managed a Kanban board on JIRA</li>
                    </ul>

                <li>Led a team in delivering a Satellite Communication feature to help us become Boeing 787 offerable</li> 
                <li>Acted as the branch manager in SVN for projects spanning across numerous teams for varying releases</li>
                <li>Helped lead a project to merge the Wireless product into the main product</li>
                <li>Acted as a Product Developer within the LeSS Agile framework</li>
                    <ul>
                        <li>On a weekly basis, met with the Product Owner to refine the product backlog and break down
                        stories into sizable tickets</li>
                        <li>Collaborated with numerous teams to help distribute and unsilo knowledge</li>
                    </ul>
                <li>Volunteered to support numerous emergency releases, and teams that were understaffed</li>
                    <ul>
                        <li>Supported the Manufacturing department diagnose SSD failures and refactored their bench applications</li>
                        <li>Rose to the occasion to maintain the company's build pipeline after the loss of our sole DevOps employee - this
                        was also how I had began my transition to the DevOps role</li>
                        <li>Volunteered to be a mentor for the first internship program that the company was
                        holding</li>
                    </ul>
                </ul>
            </ul>
      </div>
    );
  }
}
 
export default Career;
