import Sidebar from "./components/sidebar/sidebar"
import CenterBody from "./components/CenterBody/CenterBody"
function App() {

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar/>
        <CenterBody/>
      </div>
    </div>
  )
}

export default App
