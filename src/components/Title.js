const Title = ({ name, fontWeight }) => {
  return <p style={{ fontWeight }}>{name}</p>;
};

export default Title;

// const Title = ({ name, type }) => {
//     const className = type === "bold" ? "bold" : "";
//     return <p className={className}>{name}</p>;
//   };

//   export default Title;
