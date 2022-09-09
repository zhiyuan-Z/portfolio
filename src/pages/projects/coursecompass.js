import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Carousel from "../../components/Carousel";
import List from "../../components/List";
import LightBox from "../../components/LightBox";
import Footer from "../../components/Footer";
import classes from "../../utils/classes";
import { motion, useScroll, useSpring } from "framer-motion";

export const ProjectSectionHeading = ({ className, as = 'h3', ...rest }) => {
  const Component = as;
  let fontSize;
  switch (as) {
    case 'h3':
      fontSize = 'text-3xl';
      break;
    case 'h4':
      fontSize = 'text-2xl';
      break;
    case 'h5':
      fontSize = 'text-xl';
      break;
    default:
      fontSize = 'text-4xl';
  }
  return (
    <Component
      className={classes(className, fontSize, 'font-mont font-semibold text-blue mt-10 mb-4')}
      {...rest}
    />
  )
};

export const ProjectSectionContent = ({ className, as = 'div', ...rest }) => {
  const Component = as;
  return (
    <Component
      className={classes(className, 'relative my-2')}
      {...rest}
    />
  )
};

const CourseCompass = () => {
  const title = "CourseCompass";
  const subTitle = "Interaction Design Course Project"
  const description = "I designed a mobile app for students to find their curriculum interest and create course schedules."

  const qoc = [
    {
      url: '/coursecompass/cc_qoc_1.png',
      subHtml: '<div>The first diagram targets towards the basic needs of the users - how to help them schedule their courses.</div>'
    },
    {
      url: '/coursecompass/cc_qoc_2.png',
      subHtml: '<div>The second diagram targets towards the psychological needs of the users - to get more in-depth insights about courses and make informed decisions about course planning.</div>'
    },
    {
      url: '/coursecompass/cc_qoc_3.png',
      subHtml: '<div>The third diagram targets towards the self-fulfillment needs of the users - to find their interests based on the courses they have taken and find courses that align with their interests and career goals.</div>'
    },
  ];

  const storymap = [
    {
      url: '/coursecompass/cc_storymap_1.png',
      subHtml: 'Story Map of Primary Persona'
    },
    {
      url: '/coursecompass/cc_storymap_2.png',
      subHtml: 'Story Map of Secondary Persona'
    },
    {
      url: '/coursecompass/cc_storymap_3.png',
      subHtml: 'Story Map of Secondary Persona'
    },
  ]

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="font-sans relative overflow-hidden">
      <Head>
        <title>Zhiyuan Zhang - CourseCompass</title>
        <meta name="description" content="Interaction Design Course Project - A mobile app design that features " />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <motion.div className="progress-bar" style={{ scaleX }} />

      <Navigation />

      <main className="min-h-screen px-8 w-4/5 desktop:w-[1000px] m-auto font-sans text-blue-dark">
        <div className="h-[1000px] w-screen absolute top-0 left-0 overflow-hidden -z-50">
          <div className="relative w-full h-full">
            <Image
              src="/coursecompass/cc_main.png"
              alt="Mockup of the mobile app"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 inset-0 overflow-hidden" />
            <div className="bg-gradient-to-b from-[#fff]/[.9] to-[#fff] absolute inset-0" />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-[24px] gap-y-[16px] mx-auto pt-32">
          <h1 className="col-start-1 col-end-13 font-mont font-semibold text-blue text-5xl">{title}</h1>
          <h2 className="col-start-1 col-end-13 font-mont font-medium text-blue text-xl">{subTitle}</h2>
          <div className="col-start-1 col-end-8 font-normal text-blue text-lg">{description}</div>
        </div>
        <div className="my-8 font-normal text-lg">
          <ProjectSectionHeading>The Problem</ProjectSectionHeading>
          <div className="my-2">
            Every student needs to plan their courses. However, finding the information they need can be hard. It is difficult to know what the courses are actually like and how they can relate to students&apos; careers merely from course statistics and syllabus, not to mention that information is often spreaded across multiple resources.
            <br />
            <span className="font-bold"> So, UM students need more efficient ways to make informed decisions on course planning.</span>
          </div>

          <ProjectSectionHeading as='h4'>
            Target Audience
          </ProjectSectionHeading>
          <ProjectSectionContent>
            All UM students who have needs in course planning.
          </ProjectSectionContent>

          <ProjectSectionHeading as='h4'>
            Goal
          </ProjectSectionHeading>
          <ProjectSectionContent>
            Create a user-friendly tool to help UM students find schedule and make informed decisions on course planning.
          </ProjectSectionContent>

          <ProjectSectionHeading as='h4'>
            Context and Environment
          </ProjectSectionHeading>
          <ProjectSectionContent>
            <div className="grid gap-x-8 gap-y-2 grid-cols-12 grid-rows-4">
              <div className="col-start-1 col-end-4 font-semibold">User</div>
              <div className="col-start-4 col-end-13">Usually busy, relatively comfortable with technology and information</div>
              <div className="col-start-1 col-end-4 font-semibold">Technology</div>
              <div className="col-start-4 col-end-13">Access to computer and mobile</div>
              <div className="col-start-1 col-end-4 font-semibold">Social Aspect</div>
              <div className="col-start-4 col-end-13">Usually in individual, both incoming students and senior students</div>
              <div className="col-start-1 col-end-4 font-semibold">User Environment</div>
              <div className="col-start-4 col-end-13">Both on-campus and off-campus</div>
            </div>
          </ProjectSectionContent>

          <ProjectSectionHeading>
            Design Process
          </ProjectSectionHeading>
          <ProjectSectionHeading as='h4'>
            User Interviews
          </ProjectSectionHeading>
          <ProjectSectionContent>
            To better empathize with my users, I interviewed 5 students from different majors and grades. These interviews uncovered new perspectives and needs that I hadn&apos;t realize before. I found out that students use up to <span className="font-bold">5+ resources</span> to plan their courses, and some resources are hard to find. Furthermore, <span className="font-bold">friends&apos; recommendations</span> are a major factor when planning for courses. This could infer possible troubles for students who don&apos;t have a lot of connections in their programs, especially for <span className="font-bold">incoming students</span>. Plus, I found that most students care most about what courses would <span className="font-bold">align with their interest</span> and help them <span className="font-bold">progress towards their career</span>. Then, I categorized my key findings based on Maslow&apos;s hierarchy of needs.
          </ProjectSectionContent>
          <ProjectSectionContent>
            <div className="grid gap-x-8 gap-y-2 grid-cols-12 grid-rows-3 my-8">
              <div className="col-start-1 col-end-4 font-semibold">Basic</div>
              <div className="col-start-4 col-end-13">
                <ul>
                  <li className="mb-2">
                    Students need a platform that <span className="font-bold">integrates course-related information</span>.
                  </li>
                  <li className="my-2">
                    Students want easy ways of finding courses that fit their schedule, avoiding conflicts and planning courses (both short and long terms).
                  </li>
                </ul>
              </div>
              <div className="col-start-1 col-end-4 font-semibold">Psychological</div>
              <div className="col-start-4 col-end-13">
                <ul>
                  <li className="mb-2">
                    Students need to hear more for <span className="font-bold">advice from peer or senior advisors</span>.
                  </li>
                  <li className="my-2">
                    Students want to hear <span className="font-bold">experiences from previous students</span> who have taken the courses.
                  </li>
                </ul>
              </div>
              <div className="col-start-1 col-end-4 font-semibold">Self-fulfillment</div>
              <div className="col-start-4 col-end-13">
                <ul>
                  <li className="mb-2">
                    Students want to know what courses <span className="font-bold">closely related to their interest fields</span>.
                  </li>
                  <li className="my-2">
                    Students want to which courses can help them <span className="font-bold">gain a career in their interest fields</span>.
                  </li>
                </ul>
              </div>
            </div>
          </ProjectSectionContent>

          <ProjectSectionHeading as='h4'>
            Personas
          </ProjectSectionHeading>
          <ProjectSectionContent>
            Based on the insight I got from previous needfinding interviews, I created 4 personas for my product. These personas helped me clarify my main design goal: provide students enough information for them to get <span className="font-bold">in-depth insight</span> about courses and allow them to explore courses that align with their <span className="font-bold">interest / career goal</span>. At the same time, I also want to consider the needs of the students who only want to <span className="font-bold">build schedule quickly and easily</span>.
            <Carousel images={['/coursecompass/cc_persona_1.png', '/coursecompass/cc_persona_2.png', '/coursecompass/cc_persona_3.png', '/coursecompass/cc_persona_4.png']} />
          </ProjectSectionContent>
          <ProjectSectionHeading as='h4'>
            Competitive Analysis
          </ProjectSectionHeading>
          <ProjectSectionContent>
            <div>
              To know more about the resources that students use, I did a competitive analysis. I found that each of the tools have different strength. But <span className="font-bold">there is not a tool that integrates all the information students look for</span>. Atlas and Coursicle have relatively easy-to-use scheduler functions, but they <span className="font-bold">lack in-depth perspectives</span> about courses. The LSA Course Guide has relatively comprehensive information, but the course list is not complete, and the site is <span className="font-bold">uneasy to navigate</span>. Wolverine Access is not easy to use but is required for course registration. There are other resources that show different perspectives about courses, but <span className="font-bold">the amount of information is very limited</span>. So, it naturally comes to me to select critical information around course planning and integrate them in an easy-to-use application.
            </div>
            {/* </ProjectSectionContent>
          <ProjectSectionContent> */}
            <div className="relative w-[800px] h-[500px] mx-auto my-6">
              <Image
                src="/coursecompass/cc_competitive_analysis.png"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </ProjectSectionContent>
          <ProjectSectionHeading as='h4'>
            QOC Diagrams
          </ProjectSectionHeading>
          <ProjectSectionContent>
            <div>
              After thoroughly framing the problem, I ideated 8 tools that may reach my goal, then I created 3 QOC diagrams to narrow them down.
            </div>
            <ul className="list-disc my-2">
              <li className="py-2">The first diagram targets towards the basic needs of the users - how to help them schedule their courses.</li>
              <li className="py-2">The second diagram targets towards the psychological needs of the users - to get more in-depth insights about courses and make informed decisions about course planning.</li>
              <li className="py-2">The third diagram targets towards the self-fulfillment needs of the users - to find their interests based on the courses they have taken and find courses that align with their interests and career goals.</li>
            </ul>
            {/* <Carousel images={['/coursecompass/cc_qoc_1.png', '/coursecompass/cc_qoc_2.png', '/coursecompass/cc_qoc_3.png']} /> */}
            <LightBox images={qoc} />
            <div>
              Based on the results of the QOC diagrams, I selected the <span className="font-bold">interactive schedule builder with holistic course information and explorative fields listings</span> as the first iteration of my design system.
            </div>
          </ProjectSectionContent>
          <ProjectSectionHeading as='h4'>
            Narrative Storyboard
          </ProjectSectionHeading>
          <ProjectSectionContent>
            <div>
              After I determined my initial design system based on the QOC diagram, I reviewed my needfindings and personas. And I created 4 scenarios for each of my personas and 1 storyboard for my primary persona.
            </div>
            <div className="grid grid-cols-12 gap-[24px] content-center">
              <div className="col-start-1 col-end-8 relative">
                <LightBox images={[{ url: '/coursecompass/cc_storyboard.png', subHtml: '<div>Narrative Storyboard</div>' }]} />
                {/* <Image src="/coursecompass/cc_storyboard.png" width="3400" height="2200" /> */}
              </div>
              <div className="col-start-8 col-end-13 flex flex-row items-center">
                <p>
                  The purpose of creating scenarios and storyboard at this stage was to develop deeper understanding and details of the context of use and to make sure that my design system aligns with the users&apos; needs and goals. In this process, I clarified the time and location where users would use my product. It also reminded me that incoming students may not be the primary user of this product, because they usually have to take required courses in the first semester.
                </p>
              </div>
            </div>
          </ProjectSectionContent>
          <ProjectSectionHeading as='h4'>
            Story Mapping & User Flow Diagram
          </ProjectSectionHeading>
          <ProjectSectionContent>
            <div>
              After I created the scenarios and storyboard, I created 4 story maps for each of my persona and a common story map.
            </div>
            <LightBox images={[{ url: '/coursecompass/cc_common_storymap.png', subHtml: '<div>Common Path Story Map</div>' }]} />
            <LightBox images={storymap} />
            <div>
              When I was building the story map, I found that the primary users would use most features and other personas would use different features. The order of the use of each feature is not necessarily in serial, so I chose the order that makes most sense to me when constructing the story map.
            </div>
            <LightBox images={[{ url: '/coursecompass/cc_userflow.png', subHtml: '<div>User Flow Diagram based on Common Path Story Map</div>' }]} />
            <div>
              Because each persona uses different features, and they may use the features in any order, I decided to design a tab bar Application. So, it will be easy for users to navigate to each tool in the application.
            </div>
          </ProjectSectionContent>
          <ProjectSectionHeading as='h4'>
            Prototyping
          </ProjectSectionHeading>
          <ProjectSectionContent>
            <div className="grid grid-cols-12 gap-[24px] content-center">
              <div className="col-start-1 col-end-7 flex flex-row items-center">
                <p>
                  After constructing a user-flow diagram, I made a <span className="font-bold">low-fidelity prototype</span>. I made the prototype interactable, so that I can do some early testing and get feedback.
                </p>
              </div>
              <div className="col-start-7 col-end-13 relative">
                <LightBox images={[{ url: '/coursecompass/cc_lofi_prototype.png', subHtml: '<div>Low-Fidelity Prototype</div>' }]} />
              </div>
              <div className="col-start-1 col-end-7 relative">
                <LightBox images={[{ url: '/coursecompass/cc_midfi_prototype.png', subHtml: '<div>Mid-Fidelity Prototype</div>' }]} />
              </div>
              <div className="col-start-7 col-end-13 flex flex-row items-center">
                <p>
                  I did 5 micro-usability tests. One problem is that the function of each icon on the tab bar is not clear, so I put description fields below them in the mid-fi prototype. Another feedback I received is that the sample academic plan is very useful, so I made it interactive. Meanwhile the profile page is not used very often, so I replaced it with the interactive plan. I also made a few changes to the UI design. This was the <span className="font-bold">mid-fi prototype</span> I made.
                </p>
              </div>
              <div className="col-start-1 col-end-7 flex flex-row items-center">
                <p>
                  Now that the mid-fi prototype is more interactive and complete. I did a few usability tests again and get some new feedbacks. Based on the feedback, I evaluated the current design critically and decided to add a few more features. At the same time, I was not satisfied with the UI design, so I read Google&apos;s material design guideline, and this was the <span className="font-bold">hi-fi prototype</span> I made.
                </p>
              </div>
              <div className="col-start-7 col-end-13 relative">
                <LightBox images={[{ url: '/coursecompass/cc_hifi_prototype.png', subHtml: '<div>High-Fidelity Prototype</div>' }]} />
              </div>
            </div>
          </ProjectSectionContent>

          <ProjectSectionHeading>
            Key Features
          </ProjectSectionHeading>

          <ProjectSectionHeading as='h4'>
            Holistic Course Information
          </ProjectSectionHeading>
          <ProjectSectionContent>
            <div className="grid grid-cols-12 gap-[24px] items-center">
              <div className="col-start-1 col-end-5">
                <LightBox images={[
                  {
                    url: '/coursecompass/cc_courseinfo_1.png',
                    subHtml: '<div>Screen that shows basic information about the course - 1.</div>'
                  },
                  {
                    url: '/coursecompass/cc_courseinfo_2.png',
                    subHtml: '<div>Screen that shows basic information about the course - 2.</div>'
                  }
                ]} />
              </div>
              <div className="col-start-5 col-end-13">
                The course information page includes information that students care most beyond basic logistics, such as <span className="font-bold">career outcome, instructor&apos;s web page, project showcase, student reviews, etc</span>. This information provides valuable insights on students&apos; development and is hard to obtain elsewhere. Furthermore, the reviews can be filtered to reviews from students with similar backgrounds by machine learning algorithms. Because the same course could be of completely different difficulty <span className="font-bold">to students with different backgrounds</span>.
              </div>
            </div>
            <LightBox images={[
              {
                url: '/coursecompass/cc_courseinfo_3.png',
                subHtml: '<div>Projects from past semesters uploaded by students who have taken this course.</div>'
              },
              {
                url: '/coursecompass/cc_courseinfo_4.png',
                subHtml: '<div>Career outcome of students who have taken this course.</div>'
              },
              {
                url: '/coursecompass/cc_courseinfo_5.png',
                subHtml: '<div>Reviews from students who have taken this course.</div>'
              }
            ]} width="400px" />
          </ProjectSectionContent>

          <ProjectSectionContent>
            <div className="grid grid-cols-12 gap-[24px] items-center">
              <div className="col-start-1 col-end-10">
                <ProjectSectionHeading as='h4'>
                  Interactive Academic Plan
                </ProjectSectionHeading>
                This feature is designed to solve students&apos; needs of <span className="font-bold">long-term planning</span> and determine their future paths. The plan shows a sample plan with required and recommended courses initially. Students are allowed to add/remove courses from the plan. The tool provides an easy way for students to plan in advance and find their desired path more easily. Because once they have made a plan, they would know better what their goals are and be more persistent towards their goals.
                <br /><br />
                In addition, the system checks pre-requisites and other enrollment requirements automatically. It also prevents students struggling to meet graduation requirements in their last semesters.
              </div>
              <div className="col-start-10 col-end-13">
                <LightBox images={[{
                  url: '/coursecompass/cc_academicplan.png',
                  subHtml: '<div>Interactive academic plan where students can see recommended courses, check course dependencies and plan ahead.</div>'
                }]} />
              </div>
            </div>
          </ProjectSectionContent>

          <ProjectSectionHeading as='h4'>
            Course Listings by Fields
          </ProjectSectionHeading>
          <ProjectSectionContent>
            <div className="grid grid-cols-12 gap-[24px] items-center">
              <div className="col-start-1 col-end-5">
                <LightBox images={[
                  {
                    url: '/coursecompass/cc_fieldslistings.png',
                    subHtml: '<div>Course listings classified by fields.</div>'
                  },
                  {
                    url: '/coursecompass/cc_courselistings.png',
                    subHtml: '<div>Required and recommended courses in a field.</div>'
                  }
                ]} />
              </div>
              <div className="col-start-5 col-end-13">
                This feature allows students to explore the fields they are interested in. They can see the required and key courses related to the fields. In this way, they can know whether they want to <span className="font-bold">pursue further in the field</span> based on the courses in the listing and what courses they may take in the future.
                <br /><br />
                I decide to give this feature an important role because my biggest design goal is to help students <span className="font-bold">find their interest</span>. I want to encourage students explore on their own instead of relying too much on the recommendation system because this is an important decision they should figure out on their own. Meanwhile, my tool would make the process as easy as possible.
              </div>
            </div>
          </ProjectSectionContent>

          <ProjectSectionContent>
            <div className="grid grid-cols-12 gap-[24px] items-center">
              <div className="col-start-1 col-end-10">
                <ProjectSectionHeading as='h4'>
                  Course Eligibility Checklist
                </ProjectSectionHeading>
                This feature helps students generate schedules easily by automatically checking enrollment requirements and time conflicts. Students can add sections/courses to the checklist, and the checklist would find a workable schedule for them. If no workable schedule can be found, the system would tell students what courses conflicts. This would be helpful when courses have many sections. To enhance the inclusiveness and usability of the app, the app also allows students to choose their preference, such as class time and instruction mode, for the system to make general <span className="font-bold">more personal</span> schedules.
              </div>
              <div className="col-start-10 col-end-13">
                <LightBox images={[{
                  url: '/coursecompass/cc_checklist.png',
                  subHtml: '<div>Course checklist where students can choose their preferences and let the system generates a schedule for them.</div>'
                }]} />
              </div>
            </div>
          </ProjectSectionContent>

          <ProjectSectionHeading>
            Final Thoughts
          </ProjectSectionHeading>
          <ProjectSectionHeading as='h4'>
            Technical Feasibility
          </ProjectSectionHeading>
          <ProjectSectionContent>
            The design is technically feasible. Because the requirements of courses can be easily loaded into a database. Algorithms like topological sort can be used to check the prerequisite of courses. The course and field recommendation system would use student-course pairs to recommend courses to students based on their past courses, similarity to other students and the rating they give to courses in the system.
          </ProjectSectionContent>
          <ProjectSectionHeading as='h4'>
            Reflection
          </ProjectSectionHeading>
          <ProjectSectionContent>
            This was my first complete design experience, and I learned a lot from it. Here, I want to list three lessons I learnt.
            <br /><br />
            One lesson from my needfinding interviews was that not all users are like me. Some students tended to make careful decisions before choosing classes and some just chose randomly. It was also different how each student feels about their interest level of their paths. The needfinding interviews broadened my perspective and made a foundation for my following steps.
            <br /><br />
            Another lesson I learned was to speak with different people, whether it&apos;s about knowing the problem and the users more or about the design itself. I think speaking with other people, learning their perspective and listening to their advice helped me refine my design.
            <br /><br />
            Last but not least, I think it was very helpful to be critical about the design throughout the design process and keep thinking deeply about the goals and needs of users. Sometimes, just rethinking the design features and the goals can give me inspiration.
          </ProjectSectionContent>
          <ProjectSectionHeading as='h4'>
            Challenges
          </ProjectSectionHeading>
          <ProjectSectionContent>
            One of the biggest challenges was to make my design differentiate from the competitors. There were plenty of resources that were referenced by students. It took me efforts to know what students really needed and what the existing resources couldn&apos;t provide.
            <br /><br />
            Another challenge was to discard the bias of myself as a designer and to really listen to the perspectives of different students. Because I was also a student, I always reminded myself to leave my opinions aside and accept users&apos; opinions.
          </ProjectSectionContent>
          <ProjectSectionHeading as='h4'>
            For Future
          </ProjectSectionHeading>
          <ProjectSectionContent>
            I learned a lot in this project, whether its design thinking or software skills. In the future, I will adopt better prototyping workflow. I will use atomic design methods, such as first creating a component library of basic components, then determining the layout of each screen and refining the visual details at last.
          </ProjectSectionContent>
          <div className="text-blue text-3xl font-semibold my-8 hover:underline focus-within:underline">
            <Link href="https://xd.adobe.com/view/ac4c30a2-2882-42a6-ab24-c384731c2aa9-f91f/">
              <a target="_blank">Link to Prototype</a>
            </Link>
          </div>
          <div className="h-[680px] overflow-hidden">
            <iframe width="390" height="844" src="https://xd.adobe.com/embed/ac4c30a2-2882-42a6-ab24-c384731c2aa9-f91f/" frameBorder="1" className="box-content border-[12px] rounded-[47pt] scale-75 -translate-y-[110px] m-auto" allowFullScreen />
          </div>
        </div>
      </main>
      <Footer />

    </div>
  );
}

export default CourseCompass;