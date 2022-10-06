import Head from "next/head";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import classes from "../../utils/classes";
import LightBox from "../../components/LightBox";
import { motion, useScroll, useSpring } from 'framer-motion';


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
      className={classes(className, fontSize, 'font-mont font-semibold text-orange-dark mt-10 mb-4 px-8 w-4/5 desktop:w-[1000px] m-auto')}
      {...rest}
    />
  )
};

export const ProjectSectionContent = ({ className, as = 'div', ...rest }) => {
  const Component = as;
  return (
    <Component
      className={classes(className, 'relative my-2 px-8 w-4/5 desktop:w-[1000px] m-auto')}
      {...rest}
    />
  )
};

export const ContentWithImage = ({ className, image, height = "400px", imgLeft, children }) => {
  return (
    <div className={classes(`min-h-[${height}]`, `grid grid-cols-2 gap-4 my-4`)}>
      <div className={` ${imgLeft ? 'col-start-2' : 'col-start-1'} col-span-1 row-start-1`}>
        {children}
      </div>
      <div className={classes(`${imgLeft ? 'col-start-1' : 'col-start-2'}`, ` w-[220px] col-span-1 relative row-start-1 justify-self-center`)} >
        {/* <Image src={image} layout="fill" objectFit="contain" /> */}
        <LightBox images={[{
          url: image,
          subHtml: ''
        }]} />
      </div>
    </div>
  );
}


const Habby = () => {
  const title = "Habby";
  const subTitle = "Online Communities Course Project"
  const description = "I designed an online community that helps people stay on track of their habits."

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

      <main className="min-h-screen font-sans text-orange-darkest">
        <div className="h-[1000px] w-screen absolute top-0 left-0 overflow-hidden -z-50">
          <div className="relative w-full h-full">
            <Image
              src="/habby/hb_main.png"
              alt="Mockup of the mobile app"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 inset-0 overflow-hidden" />
            <div className="bg-gradient-to-b from-[#fff]/[.9] to-[#fff] absolute inset-0" />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-[24px] gap-y-[16px] mx-auto pt-32 text-orange-dark px-8 w-4/5 desktop:w-[1000px] m-auto">
          <h1 className="col-start-1 col-end-13 font-mont font-semibold text-5xl">{title}</h1>
          <h2 className="col-start-1 col-end-13 font-mont font-medium text-xl">{subTitle}</h2>
          <div className="col-start-1 col-end-10 font-normal text-lg">{description}</div>
        </div>
        <div className="my-8 font-normal text-lg relative">
          <ProjectSectionHeading>The Problem</ProjectSectionHeading>
          <ProjectSectionContent>
            Setting and chasing personal goals help people to receive mental fulfillment and self-improvement. However, habituation can be difficult because people may find it hard to maintain the momentum and persistence on their own. So, I designed an online community that helps people stick to their habits.
          </ProjectSectionContent>
          <ProjectSectionHeading as="h4">
            Persona
          </ProjectSectionHeading>
          <ProjectSectionContent>
            <LightBox images={[
              {
                url: '/habby/hb_persona_1.png',
                subHtml: '<div>Persona 1 - Jessie</div>'
              },
              {
                url: '/habby/hb_persona_2.png',
                subHtml: '<div>Persona 2 - Maria</div>'
              }
            ]} />
          </ProjectSectionContent>
          <ProjectSectionHeading>
            Process
          </ProjectSectionHeading>
          <ProjectSectionHeading as='h4'>
            Preliminary Research
          </ProjectSectionHeading>
          <ProjectSectionContent>
            <p>
              There are essential 9 principles of community building (Amy, 2000). Among the 9 principles, <span className="font-bold">purpose of community, extensible gathering places, evolving profiles, supporting member-created subgroups and integration with the real world</span> are the most important ones that are used in Habby.
            </p>
            <br />
            <p>
              Two types of attachments can be applied to online community design to increase users attachment to online communities from a group attachment theory perspective, which are <span className="font-bold">identity-based attachment and bond-based attachment</span> (Ren et al., 2007). Identity-based attachment starts from social categorization, and bond-based attachment starts from social interaction. They have different consequences on online communities. But both of them result in in-group loyalty and active participation, which helps the users of Habby to actively pursuing their habits.
            </p>
            <br />
            <p>
              Online social comparisons are typically considered as having negative impact on <span className="font-bold">social well-being</span> of users (Verduyn et al.). But researchers also found that online social comparison could also have positive outcomes, such as inspiration (Meier et al., 2020). Researchers concludes that the contents user encounters are the main boundary condition for positive and negative impacts on social well-being. Furthermore, results imply that <span className="font-bold">benign envy responses from social comparison can motivate users to keep up with their peers</span> (Meier et al., 2020).
            </p>
          </ProjectSectionContent>
          <ProjectSectionHeading as="h4">
            Competitive Analysis
          </ProjectSectionHeading>
          <ProjectSectionContent>
            <div>
              <LightBox images={[{
                url: '/habby/hb_competitive_analysis.png',
                subHtml: '<div>Compeitive Analysis</div>'
              }]} />
              For the complete diagram, see Appendix ?.
              <div>
                We analyzed 8 competitors in total. Our major findings are:
                <ul className="list-disc ml-8">
                  <li>Most competitors provide the same <span className="font-bold">basic features</span>, such as habit tracker, daily check-in and calendar, to help users keep track of their habits.</li>
                  <li>Competitors use <span className="font-bold">different strategies</span> to retain users, including gamification/storytelling and clear, functional visualization that emphasizes lifestyle and efficiency.</li>
                  <li>None except Discord, which is a social platform, features <span className="font-bold">interaction among users</span>. Whereas the <span className="font-bold">emotional and social support from a community</span> could benefit habit formation.</li>
                </ul>
              </div>
            </div>
            <p>
              Based on the competitive analysis and our preliminary research, we decided to build a habit formation app that has basic features for tracking habits with a focus on online communities.
            </p>
          </ProjectSectionContent>
          <ProjectSectionHeading>
            Final Design
          </ProjectSectionHeading>
          <ProjectSectionHeading as="h4">
            Habit Communities
          </ProjectSectionHeading>
          <ProjectSectionContent>
            <ContentWithImage image="/habby/hb_community_1.png" >
              <div>
                Community is the main gathering place for users to interact with others and helps them to form their habits.
                <ul className="list-disc ml-8">
                  <li>Users can either join communities that are created by others or create their own communities.</li>
                  <li>Communities are classified into several categories to help users find communities that fit their interests.</li>
                  <li>Users can also just choose &quot;other&quot; as a category if they think the community does not fit into any of the existing categories. We want to increase diversity and allow users to create communities that are suitable for their own habits.</li>
                </ul>
              </div>
            </ContentWithImage>
            <br />
            <ContentWithImage image="/habby/hb_community_2.png" >
              <p>
                When creating a community, the user must give the community a name and a description. It lets other users know what the community is about and know the community guidelines. It makes sure that everyone works towards the same goal, so community members develop <span className="font-bold">identity-based attachment</span>, and the community is an <span className="font-bold">engaging, supportive and healthy one</span>. We do not strictly bind a community to a specific habit because each user has slightly different habits. Users can also make their community private if they just want to record their own habits.
              </p>
            </ContentWithImage>
          </ProjectSectionContent>
          <ProjectSectionHeading as="h4">
            Community Interaction
          </ProjectSectionHeading>
          <ProjectSectionHeading as="h5">
            Post
          </ProjectSectionHeading>
          <ProjectSectionContent>
            <ContentWithImage image="/habby/hb_post_1.png">
              <p>
                In Habby communities, creating a post is a way to update the user&apos;s progress and share with other users. Users can choose one of their habits when creating their posts. The title and description are not required in case they don&apos;t have anything to share or simply don&apos;t feel comfortable to share. If they leave them blank, the post would not be visible in the community.
              </p>
            </ContentWithImage>
            <br />
            <ContentWithImage image="/habby/hb_post_2.png">
              <p>
                Besides these features, the post function is just like posts in other online communities such as Instagram or Twitter. The reason we choose this format is that we think posts could encourage users to post high-quality content and are more organized than other formats like messages. In this way, users can easily see what others share in the community.
              </p>
            </ContentWithImage>
          </ProjectSectionContent>
          <ProjectSectionHeading as="h5">
            Like and Comment
          </ProjectSectionHeading>
          <ProjectSectionContent>
            <ContentWithImage image="/habby/hb_like_1.png">
              <p>
                Users can like and comment on others&apos; posts. We introduce likes and comments because they are direct ways for users <span className="font-bold">to get rewards for sticking to their habits</span>. The user can see how many likes he/she gets, but the number of likes of others&apos; posts would not be shown directly. Because we want users to get stimulated towards their goal while <span className="font-bold">protecting them from the negative impact on their self-esteem from social comparison</span>. In addition, comments can be easily managed and organized to control harmful contents.
              </p>
            </ContentWithImage>
          </ProjectSectionContent>
          <ProjectSectionHeading as="h4">
            Profile/Gamification
          </ProjectSectionHeading>
          <ProjectSectionContent>
            <ContentWithImage image="/habby/hb_profile_1.png">
              <p>
                On Habby, user profiles are designed to help users track their achievements and connections with friends. Users can get an overview of the number of days they have stuck with it, the number of likes and friends they have received from others.
              </p>
            </ContentWithImage>
          </ProjectSectionContent>
          <ProjectSectionHeading as="h5">
            History & Badges
          </ProjectSectionHeading>
          <ProjectSectionContent>
            <ContentWithImage image="/habby/hb_profile_2.png">
              <div>
                To better encourage users to keep using the app to track their habits, we created two modules to showcase the goals users accomplished and the badges they earned.
                <ul className="list-disc ml-8">
                  <li>They enrich the sense of accomplishment of the user.</li>
                  <li>They are a record of user behavior and motivate users to stay on track of their habits to unlock more achievements.</li>
                  <li>They are also a tool for some users to showcase their achievements to their friends.</li>
                </ul>
                We protect users&apos; privacy by allowing them to choose whether to display these achievements and badges to other users in the community or not.
              </div>
            </ContentWithImage>
          </ProjectSectionContent>
          <ProjectSectionHeading as="h5">
            Changing Outfit
          </ProjectSectionHeading>
          <ProjectSectionContent>
            <ContentWithImage image="/habby/hb_profile_3.png">
              <p>
                Users can use the points they get from daily check-in and achievements to change their character image.  The user&apos;s changed image will be displayed in their avatar and personal page. We chose changing outfits to make habituation less boring because it is a more liberal approach compared to achievements and rankings. But it also satisfies the user&apos;s need to show themselves and be seen. We chose a freer way of dressing up - to satisfy the user&apos;s need to be &quot;seen&quot;, but also to connect with the user&apos;s behavior.
              </p>
            </ContentWithImage>
          </ProjectSectionContent>
          <ProjectSectionHeading as="h4">
            Onboarding
          </ProjectSectionHeading>
          <ProjectSectionContent>
            <p>
              Users will go through a series of guided steps when they first use the app. These steps will help them find the right community to join and help them stick to their habits. Allowing new users to join the right communities early not only allows them to learn the main features and usage of Habby faster, but also increases the user stickiness of older users. Usually, the relationship of members within an online community affects the functioning of the community, and an online community with interdependent and cooperative members will have higher user stickiness (Ren et al., 2007).
            </p>
            <div>
            <LightBox images={[
              {
                url: '/habby/hb_onboarding.gif',
                subHtml: ''
              }
            ]} />
            </div>
            <p>
              In order to give users more control and flexibility, we allow users to skip the onboarding, but we still encourage them to set their habits and join the communities they are interested in as soon as they enter the app.
            </p>
          </ProjectSectionContent>



          <ProjectSectionHeading>
            Reference
          </ProjectSectionHeading>
          <ProjectSectionContent>
            <ul>
              <li>Kim, A. J. (2000). Community Analysis Template: 9 Timeless Design Principles for Community-Building. <span className="italic">CS3778B Newsgroup</span>.</li>
              <li>Ren, Y., Kraut, R., & Kiesler, S. (2007). Applying common identity and bond theory to design of online communities. <span className="italic">Organization studies, 28</span>(3), 377-408.</li>
              <li>Verduyn, P., Gugushvili, N., Massar, K., Täht, K., & Kross, E. (2020). Social comparison on social networking sites. <span className="italic">Current opinion in psychology, 36</span>, 32-37.</li>
              <li>Meier, A., Gilbert, A., Börner, S., & Possler, D. (2020). Instagram inspiration: How upward comparison on social network sites can contribute to well-being. <span className="italic">Journal of Communication, 70</span>(5), 721-743.</li>
            </ul>
          </ProjectSectionContent>

        </div>
      </main>
      <Footer />

    </div>
  )
}

export default Habby;