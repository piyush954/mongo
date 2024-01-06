// import css from "./Menu.module.css";
import Home from "../../img/Icon/Home.svg";
import Applications from "../../img/Icon/Applications.svg";
import Authentication from "../../img/Icon/Authentication.svg";
import E_commerce from "../../img/Icon/E-commerce.svg";
import Pages from "../../img/Icon/Pages.svg";
import Logo from "../../img/logo.svg";
import { FaAngleDown } from "react-icons/fa";
import avtar from "../../img/avatar.png";
import { CiMenuKebab } from "react-icons/ci";
import "../../src/style.css";

const Collapse = (props) => {
  const arrValue = [...props.subMenu];

  return (
    <div className="card mb-3 border-0">
      <a
        className={`card-header border-0 d-flex justify-content-between align-items-center text-decoration-none`}
        data-bs-toggle="collapse"
        href={props.herf}
      >
        <div
          className={`btn align-items-center d-flex gap-2 ps-0 text-truncate border-0`}
        >
          <img src={props.icon} alt="Icon"></img>
          {props.ItemName}
        </div>
        <i className="downIcon">
          <FaAngleDown />
        </i>
      </a>
      <div id={props.id} className={props.class} data-bs-parent="#accordion">
        {arrValue.map((item, Key) => (
          <p
            className="card-body ms-5 text-truncate mb-0 fw-bold"
            key={item + 1}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

const MenuDown = () => {
  return (
    <>
      <div className="d-flex primeColor p-2 align-items-start justify-content-start gap-2 rounded-2">
        <div className="rounded-5">
          <img src={avtar} alt="avtar" width={40} />
        </div>
        <div className="text-white">
          <h5 className="mb-0" style={{ fontSize: 15 }}>
            Piyush Kumar
          </h5>
          <p className="mb-0" style={{ fontSize: 12 }}>
            piyush954sin@gmail.com
          </p>
        </div>
        <span>
          <CiMenuKebab />
        </span>
      </div>
    </>
  );
};

const Menubar = () => {
  return (
    <>
      <div
        className={`align-content-between d-flex flex-column justify-items-center bg-white vh-100 px-3`}
      >
        <div className="flex-fill">
          <div className="d-flex justify-content-center m-5">
            <img src={Logo} alt="logo"></img>
          </div>
          <div id="accordion">
            <Collapse
              class="collapse show"
              ItemName="Home"
              icon={Home}
              herf="#collapseOne"
              id="collapseOne"
              subMenu={["Dashboard", "Analytics"]}
            />
            <Collapse
              class="collapse"
              ItemName="Pages"
              icon={Pages}
              herf="#collapseTwo"
              id="collapseTwo"
              subMenu={["menu 1", "menu 2"]}
            />
            <Collapse
              class="collapse"
              ItemName="Applications"
              icon={Applications}
              herf="#collapseThree"
              id="collapseThree"
              subMenu={["menu 1", "menu 2"]}
            />
            <Collapse
              class="collapse"
              ItemName="E-Commerce"
              icon={E_commerce}
              herf="#collapseFour"
              id="collapseFour"
              subMenu={["menu 1", "menu 2"]}
            />
            <Collapse
              class="collapse"
              ItemName="Authetication"
              icon={Authentication}
              herf="#collapseFive"
              id="collapseFive"
              subMenu={["menu 1", "menu 2"]}
            />
          </div>
        </div>
        <div className="mb-3 mx-1 text-white">
          <MenuDown />
        </div>
      </div>
    </>
  );
};

export default Menubar;
