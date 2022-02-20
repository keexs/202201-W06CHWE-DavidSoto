import Robottos from "./components/Robottos";

function App() {
  const robottos = [
    {
      id: "1",
      name: "MetalGreymon",
      stats: { strengh: 8, speed: 8, endurance: 8 },
    },
    { id: "2", name: "Metabee", stats: { strengh: 7, speed: 7, endurance: 7 } },
    {
      id: "3",
      name: "OptimusCode",
      stats: { strengh: 5, speed: 5, endurance: 5 },
    },
    {
      id: "4",
      name: "Doraemon",
      stats: { strengh: 10, speed: 10, endurance: 10 },
    },
  ];

  return (
    <div>
      <h1>fbriagbuilr</h1>
      <Robottos robottos={robottos}></Robottos>
    </div>
  );
}

export default App;
