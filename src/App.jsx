import "./index.css";
import { Hero } from "./components/Hero.jsx";
import { DmCard } from "./components/Card.jsx";
import { Card } from "./components/Cards.jsx";

export const App = () => {
  let cardData = {
    title: "Camera",
    description: "Hello coders from Safal Chhetri to the chai aur code channel",
    imageSrc: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
  };
  return (
    <>

      <Hero />
      <DmCard />
      <Card cardData={cardData} />
      <Card/>
    </>
  );
};
