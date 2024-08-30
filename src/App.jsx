import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="h-screen w-full flex items-center justify-around">
      <div className="w-full md:w-[800px] h-screen  p-2 ">
        <Header />
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
