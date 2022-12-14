const List = ({ heading, ordered, divide, children, className, ...rest }) => {
  const Element = ordered ? 'ol' : 'ul';

  return (
    <>
      {!!heading && (
        <div className="font-heading font-medium text-2xl px-4 py-2">
          {heading}
        </div>
      )}
      <Element className={`font-body text-xl ${ divide ? 'divide-y divide-light-orange border-y border-light-orange' : ''}`} {...rest}>
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

export default List;