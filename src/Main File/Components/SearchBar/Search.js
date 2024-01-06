import { CiSearch } from "react-icons/ci";

const SearchBar = (props) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between rounded-3 py-2 px-3 mb-2">
        <span className=" col-sm-3 col-lg-3">
          <h2
            className="mb-0 text-truncate"
            style={{ color: "purple", fontWeight: "bold" }}
          >
            {props.Heading}
          </h2>
        </span>
        <div className="d-flex form align-items-center rounded-5 mx-4 bg-white">
          <input
            type="search"
            className="form-control-plaintext border-0 rounded-5 ps-3 d-md-none d-sm-none d-lg-flex"
            placeholder="Search anything here..."
          />
          <i className="px-2" style={{ fontSize: 20 }}>
            <CiSearch />
          </i>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
