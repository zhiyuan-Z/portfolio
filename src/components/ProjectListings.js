import ProjectCard from "./ProjectCard";

const ProjectListings = (props) => {
  const home = props.home;
  const projects = [
    {
      title: 'CourseCompass',
      subtitle: 'Mobile App Design',
      description: 'A mobile app for students to find their interest and make course schedules.',
      bgColor: 'bg-[#cfe2f6]',
      image: '/coursecompass/cc_main.png',
      link: '/projects/coursecompass'
    },
    // {
    //   title: 'Habby',
    //   subtitle: 'Mobile App Design',
    //   description: 'An online community that facilitates habit formation and relationship building through user interactions and gamification.',
    //   bgColor: 'bg-[#FDF1E4]',
    //   image: '/DSC_0414.jpg',
    // },
    // {
    //   title: 'LCN Website Redesign',
    //   subtitle: 'Website Redesign / UX Research',
    //   description: 'Investigated how users use the Lemur Conservation Network (LCN) website and redesigned their members page.',
    //   bgColor: 'bg-[#F8E0D7]',
    //   image: '/DSC_0414.jpg',
    // },
    // {
    //   title: 'UX Research for the OSU Library',
    //   subtitle: 'UX Research',
    //   description: 'Used a variety of methods to understand user needs of OSU Digital Collections and conducted usability study.',
    //   bgColor: 'bg-[#EDD8D7]',
    //   image: '/DSC_0414.jpg',
    // },
  ]

  const projectsToShow = [];

  projects.forEach((projectInstance, index) => 
    projectsToShow.push(
      <ProjectCard project={projectInstance} key={index} />
    )
  );

  return (
    <div className={`w-full flex flex-col border-b-4 border-orange ${!home ? "mt-[80px]" : ""}`} id="design">
      {projectsToShow}
    </div>
  );
}

export default ProjectListings;