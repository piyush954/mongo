// import the necessary files and styles
import "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Index from "./Main File/src/index/Index.js";
import "bootstrap/js/dist/collapse";

// function component to render the application
function App() {
  return (
    <>
      {/* render the Index component */}
      <Index />
    </>
  );
}

// export the App component to be used in other parts of the application
export default App;