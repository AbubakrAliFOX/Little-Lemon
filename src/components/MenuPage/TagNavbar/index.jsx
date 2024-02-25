const TagNavbar = ({ tag, setTag }) => {
  const handleClick = (e) => {
    if (e.target.localName === "li") {
      setTag((prevTag) => (prevTag = e.target.id));
    } else if (e.target.localName === "a") {
      setTag((prevTag) => (prevTag = e.target.parentElement.id));
    }
  };

  const tags = [
    "All",
    "Specialties",
    "Salads",
    "Seafood",
    "Desserts",
    "Soups",
    "Beverages",
  ];

  const selectedTag = tag;

  return (
    <nav>
      <ul>
        {tags.map((tag) => (
          <li
            className={selectedTag === tag ? "selected-li" : undefined}
            id={tag}
            onClick={handleClick}
          >
            <a>{tag}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TagNavbar;
