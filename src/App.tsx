import { useState } from "react";
import Alert from "./components/Alert";
// import ListGroup from "./components/ListGroup";
// let items = ["New Yourk", "Tokeyo", "New Delhi", "Patna", "Goa"];
// let heading = "Cities";
// const handleSelect = (item: string) => {
//   console.log(item);
// };
import Button from "./components/Button";
const handleButton = () => {
  console.log("Button clicked");
};
function App() {
  const [isAlert, setAlert] = useState(false);
  return (
    <div>
      {/* <ListGroup items={items} heading={heading} onSelectItem={handleSelect} /> */}
      {isAlert && (
        <Alert onClose={() => setAlert(false)}>
          <span>Hello World</span>
        </Alert>
      )}
      <Button
        onClick={() => {
          setAlert(true);
          handleButton();
        }}
      >
        My Button
      </Button>
    </div>
  );
}
export default App;
