import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Gallery } from "./Pages/Gallery";
import { Post } from "./Pages/Post/Post";
import { Book } from "./Pages/Contacts/Contacts";

const data = {
  name: "save.life.ina.ua",
  avatarSrc:
    "https://image.shutterstock.com/image-vector/donate-blood-save-life-600w-587733515.jpg",
  postSrc:
    "https://static.timesofisrael.com/www/uploads/2022/04/AP22090624136547-1024x640.jpg",

  text: "Так нульове розмитнення ж ввели, то ми пригнали собі трохи російських танків, — сміються хлопці, коли запитуємо про куряву вполі, яку здіймає, донедавна російський Т-72Б3. В сонці Примор'яармійці прямо на передовій освоюють трофеї. Т-72Б, Т-72Б3 і Т90 —машини, створені росіянами на базі радянського Т-72, яких чимало є вЗСУ. Тому особливих труднощів не виникає. — Спалили росіянам БМП-3,бронеавтомобіль Тигр, — розповідають танкісти, про великоднійвікенд. - Працюємо. Тим часом, Фонд закрив ще одному підрозділупотреби у цифровому, захищеному зв'язку. Рухаємось далі! Підтримуйтевійсько за посиланням у шапці профілю. Фото: @podylsky Фонд Повернисьживим",
};
function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Link className="name" to="/">
            Home
          </Link>
          <Link className="name" to="/gallery">
            Gallery
          </Link>
          <Link className="name" to="/post">
            Post
          </Link>
          <Link className="name" to="/contacts">
            Contacts
          </Link>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/post"
            element={
              <Post
                name={data.name}
                avatarSrc={data.avatarSrc}
                text={data.text}
                postSrc={data.postSrc}
              />
            }
          />
          <Route path="/contacts" element={<Book />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
