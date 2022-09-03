export default ({ heading, ordered, divide, children, className, ...rest }) => {
  const Element = ordered ? 'ol' : 'ul';

  return (
    <>
      {!!heading && (
        <div className="font-mont font-medium text-2xl px-4 py-2">
          {heading}
        </div>
      )}
      <Element className={`font-sans text-xl ${ divide ? 'divide-y divide-light-orange border-y border-light-orange' : ''}`} {...rest}>
        {children?.map((item, index) => (
          <li
            className="px-4 py-2"
            key={item}
          >
            {item}
          </li>
        ))}
      </Element>
    </>
  );
}
