import { createRoot } from "react-dom/client";
import { restaurants } from "./mock.js";


const rootElement = document.getElementById("root");

const reactRoot = createRoot(rootElement);

reactRoot.render(

    restaurants.map((item) => (
      <div key={item.id}>
        {item.name}
        <h3>Меню</h3>
        <ul>
          {item.menu.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <h3>Отзывы</h3>
        <ul>
          {item.reviews.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    ))

);