import "./Index.module.css";
// import Button from '../Components/Button/Button.js';
import Menubar from "../../Components/MenuItem/Menu.js";
import Body from "../../src/Body/Body.js";

const index = () => {
  return (
    <>
      <div className="d-flex user-select-none">
        <div className="col-auto">
          <Menubar />
        </div>
        <div className="col-auto p-3 flex-fill">
          <Body />
        </div>
      </div>
    </>
  );
};

export default index;
