import "./App.css";

import LazyImage from "./LazyImage/LazyImage";
import { data } from "./constant/data";

function App() {
  return (
    <section id="about">
    <div data-test-id="component-app" className="container">
      <h1>
        Alexander 'Greek' Thomson
      </h1>
      <p>
      Alexander "Greek" Thomson was an eminent Scottish architect and architectural theorist who was a pioneer in sustainable building. Although his work was published in the architectural press of his day, it was little appreciated outside Glasgow during his lifetime.
      </p>
      <div className="flexbox">
        {data.map((item, index) => (
          <LazyImage src={item.src} key={index} />
        ))}
      </div>
    </div>
    </section>
  );
}

export default App;
