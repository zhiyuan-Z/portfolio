import Image from 'next/image';
import Link from 'next/link';
import classes from '../utils/classes';
import { motion } from 'framer-motion';

const ProjectCard = (props) => {
  const {
    name,
    title,
    subtitle,
    description,
    bgColor,
    textColor,
    image,
    link
  } = props.project;

  const height = 'h-[24rem]';

  const coverVariants = {
    rest: { y: 0, opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    }
  }

  const textVariants = {
    offscreen: {
      y: "25%",
      opcity: 0,
    },
    rest: {
      y: 0,
      opcity: 1,
      textDecoration: 'none',
      transition: {
        duration: 0.8
      }
    },
    hover: {
      textDecoration: 'underline',
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    },
  }

  const cardVariants = {
    offscreen: {
      y: 5,
      opacity: 0
    },
    rest: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    // <div className={classes(bgColor, height, 'w-full aspect-[12/5] grid grid-cols-12 overflow-hidden justify-items-center relative')}>
    <Link href={link}>
      <a>
        <motion.div
          className={classes('flex flex-col w-full tablet:w-[32rem] relative')}
          initial="offscreen"
          whileInView="rest"
          whileHover="hover"
          // viewport={{ once: true }}
        >
          <motion.div className="relative w-full tablet:w-[32rem] h-[24rem]"
            variants={cardVariants}>
            <motion.div
              className='bg-[#fff]/20 relative w-full h-full flex z-20 justify-center items-center opacity-0 tablet:rounded-[2rem]'
              variants={coverVariants}
            >
              <p className={classes(textColor, 'font-heading font-semibold text-4xl px-2 py-1 bg-[#fff] z-20')}>
                {name}
              </p>
            </motion.div>
            <Image src={image} alt={title + subtitle} className='w-full tablet:w-[32rem] h-[24rem] object-cover object-center tablet:rounded-[2rem]' layout="fill" objectFit="cover" />
          </motion.div>
          <div className="flex flex-col my-4 px-8 tablet:px-4 tablet:py-8 justify-center overflow-hidden">
            <motion.div
              className="mb-2 laptop:mb-4"
              variants={textVariants}
            >
              <motion.h3 className="font-heading font-medium text-3xl">{title}</motion.h3>
              <motion.h4 className="font-heading font-normal text-xl py-4">{subtitle}</motion.h4>
            </motion.div>
            {/* <div className="font-normal text-xl">{description}</div> */}
          </div>
        </motion.div>
      </a>
    </Link>
  )
}

export default ProjectCard;