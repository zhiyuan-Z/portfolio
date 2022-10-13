import classes from "../utils/classes";

const Meta = ({ className, meta }) => {
  return (
    <div className={classes(className, "m-auto divide-y-2 divide-outline-light text-base drop-shadow-sm p-2")}>
      {meta.map((item, index) => (
        <div className="grid grid-cols-8 py-2" key={index}>
          <div className="col-start-1 col-span-2 font-bold">{item.key}</div>
          <div className="col-start-3 col-end-9">{item.value}</div>
        </div>
      ))}
    </div>
  );
}

export default Meta;
