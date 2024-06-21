import Search from "./components/shared/search";


function App() {
  return (
    <div className="mx-auto max-w-[1100px] pt-24">
      <h1 className="text-5xl font-bold text-center">Issue Tracker</h1>

      <div className="pt-12">
        <div>
          <Search/>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default App;
