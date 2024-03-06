export const Header = (props) => {
  return (
    <div className="flex between header">
      <h2 className="header-logo">Products</h2>
      <div className="flex">
        <input
          className="search"
          type="search"
          name=""
          onChange={(e) => props.setSearchInput(e.target.value)}
          value={props.searchInput}
          placeholder=" 🔍 search for..."
        />
        <p className="header-icon">
          <i className="fa-regular fa-message"></i>
        </p>
        <p className="">
          <i className="fa-solid fa-gear header-icon"></i>
        </p>
      </div>
    </div>
  );
};
