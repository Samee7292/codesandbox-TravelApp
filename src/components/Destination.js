import DestinationData from "./DestinationData";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the oppurtunity to see a lot,within a time frame.</p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Btangas"
        text="One of the most iconic views in Luzon, Mt. Taal boasts a Volcano
         inside a lake inside an island. If you fancy a closer look, the hike
         up to the crater is a mere 45 minutes, and is easy enough for
         beginners Guides will assist you most of the way, and you'll see the
         peculiar environment found on an active volcano, including volcanic
         rocks and steam vents. The hike can be dusty and hot, so plan for an
         early morning trip, and then unwind with some bulalo before heading
         back home!"
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="One of the most iconic views in Luzon, Mt. Taal bo inside a lake inside an island. If you fancy a close to the crater is a mere 45 minutes, and is easy er beginners. Guides will assist you most of the way the peculiar environment found on an active volc volcanic rocks and steam vents. The hike can be plan for an early moing trip, and then unwind w and here change the text perore nterording back home!"
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};
export default Destination;
