import ProjectCard from "./ProjectCard";
import classes from "../utils/classes";

const ProjectListings = (props) => {
  const {home, className} = props;
  const projects = [
    {
      name: 'CourseCompass',
      title: 'Informational Academic Guide',
      subtitle: 'Mobile Design / UI + UX / Interaction',
      description: 'A mobile app for students to find their interest and make course schedules.',
      bgColor: 'bg-[#cfe2f6]',
      textColor: 'text-blue',
      image: '/coursecompass/cc_main.png',
      link: '/projects/coursecompass'
    },
    {
      name: 'Habby',
      title: 'Habit Forming Online Community',
      subtitle: 'Mobile Design / UI + UX / Interaction / Online Community',
      description: 'An online community that facilitates habit formation and relationship building through user interactions and gamification.',
      bgColor: 'bg-[#FDF1E4]',
      textColor: 'text-orange-dark',
      image: '/habby/hb_main.png',
      link: '/projects/habby'
    },
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
    // <div className={`w-full flex flex-col border-b-4 border-orange ${!home ? "mt-[80px]" : ""}`} id="design">
    <div className={classes(className, `w-full m-auto flex flex-row flex-wrap justify-evenly ${!home ? "mt-[80px]" : ""}`)} id="design">
      {projectsToShow}
    </div>
  );
}

export default ProjectListings;