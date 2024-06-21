import IssuesList from "./components/shared/issues-list";
import Labels from "./components/shared/labels";
import Search from "./components/shared/search";
import StatusSelect from "./components/shared/status-select";


function App() {
  return (
    <div className="mx-auto max-w-[1100px] pt-24">
      <h1 className="text-5xl font-bold text-center">Issue Tracker</h1>

      <div className="pt-12 flex justify-between">
        <div className="w-2/3">
          <Search/>
          <IssuesList/>
        </div>
        <div className="w-1/3">
          <Labels/>
          <StatusSelect/>
        </div>
      </div>
    </div>
  )
}

export default App;
