import "./Search.css"

const SearchBar = () => (
    <form action="/" method="get"  id="search">
        <label htmlFor="header-search">
            <span className="visually-hidden"></span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;
