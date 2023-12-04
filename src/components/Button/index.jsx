import { Link } from "react-router-dom";

export default function Button({ content = "Content", type = "main", moreStyles, containerStyles, linkPath}) {
  const backgroundColor = type == "main" ? "#F4CE14" : "#495E57";
  const styles = {
    width: "200px",
    height: "60px",
    color: "balck",
    backgroundColor: backgroundColor,
    borderRadius: "8px",
    textDecoration: "none",
    shadow: "none",
    border: "none",
    fontFamily: "Karla",
    fontWeight: 700,
    fontSize: "18px",
    cursor: 'pointer'
  };

  return (
    <Link to={linkPath} style={containerStyles} className=".button" >
      <button style={{...styles, ...moreStyles}}>{content}</button>
    </Link>
  );
}
