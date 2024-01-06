import "./Button.css";
import Button from "react-bootstrap/Button";

const MainButton = (props) => {
  return (
    <>
      <Button type="button" className="py-3 px-4">
        <p style={{ fontWeight: 700 }}>{props.Name}</p>
      </Button>
    </>
  );
};

export default MainButton;
