import "./App.css";
import Bag from "./components/bag/Bag.jsx";
import Chats from "./components/chats/Chats.jsx";
// import Filter from "./components/filter/Filter.jsx";
// import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Message from "./components/message/Message.jsx";
import Tags from "./components/tags/Tags.jsx";

const tags_data = [
  {
    title: "Popular tags for handbag",
    tag_1: "Clutch",
    tag_2: "Fabric Lining",
    tag_3: "Baggit",
    tag_4: "Multi Compartment",
    tag_5: null,
  },
  {
    title: "Select filters",
    tag_1: "Strap-Long",
    tag_2: "Colour",
    tag_3: "Size",
    tag_4: "Brand ",
    tag_5: "Material",
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Chats />
      <Tags tags_data={tags_data[0]} />
      <Bag />
      <Tags tags_data={tags_data[1]} />
      <Message />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
