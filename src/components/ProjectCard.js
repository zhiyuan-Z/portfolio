export default function ProjectCard(props) {
  const {
    title,
    subtitle,
    description,
    bgColor,
    image
  } = props.project;

  const height = '500px';

  return (
    <div className={`${bgColor} w-full aspect-[12/5] max-h-[${height}] grid grid-cols-12 overflow-hidden justify-items-center`}>
      <div className="col-start-1 col-end-6 flex flex-col px-8 laptop:px-20 py-16 max-w-xl justify-center h-full overflow-hidden">
        <div className="mb-2 laptop:mb-8">
          <h3 className="font-mont font-semibold text-4xl pb-2">{title}</h3>
          <h4 className="font-mont font-normal text-xl">{subtitle}</h4>
        </div>
        <div className="font-normal text-lg">{description}</div>
      </div>
      <img src={image} alt={title + subtitle} className={`col-start-6 col-end-13 object-cover object-center w-full h-full`} />
    </div>
  )
}