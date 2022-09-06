import { BeforeAfter } from "./Components";

function App() {
  return (
    <div className="w-[40vw] h-[60vh] mx-auto my-4">
      <BeforeAfter
        before={{ src: "./images/before1.png" }}
        after={{ src: "./images/after1.png" }}
      />
    </div>
  );
}

export default App;
