import Search from "./components/shared/search";


function App() {
  return (
    <div className="mx-auto max-w-[1100px] pt-12">
      <h1 className="text-5xl font-bold text-center">Issue Tracker</h1>

      <div>
        <div>
          <Search/>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default App;
