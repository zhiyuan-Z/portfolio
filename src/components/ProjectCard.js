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

  const maxheight = 'max-h-[600px]';

  return (
    <div className={classes(bgColor, maxheight, 'w-full aspect-[12/5] grid grid-cols-12 overflow-hidden justify-items-center relative')}>
      <div className="col-start-1 col-end-6 flex flex-col px-8 laptop:px-20 py-16 max-w-xl justify-center h-full overflow-hidden">
        <div className="mb-2 laptop:mb-4">
          <h3 className="font-mont font-medium text-4xl">{title}</h3>
          <h4 className="font-mont font-normal text-xl py-4">{subtitle}</h4>
        </div>
        <div className="font-normal text-xl">{description}</div>
      </div>
      <div className="col-start-6 col-end-13 relative w-full">
        <Link href={link}>
          <a>
            <motion.div
              className='bg-[#fff]/20 relative w-full h-full z-30 flex justify-center items-center opacity-0'
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <p className={classes(textColor, 'font-mont font-semibold text-4xl px-2 py-1 bg-[#fff]')}>
                {name}
              </p>
            </motion.div>
            <Image src={image} alt={title + subtitle} className='object-cover object-center' layout="fill" objectFit="cover" />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard;