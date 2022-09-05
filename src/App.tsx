import { BeforeAfter } from "./Components";

function App() {
  return (
    <div className="App">
      <div className="w-[80vw] h-[80vh] mx-auto my-4">
        <BeforeAfter
          before={{ src: "./images/before.png" }}
          after={{ src: "./images/after.png" }}
        />
      </div>
    </div>
  );
}

export default App;
