import SidebarHeader from './SidebarHeader'
import SidebarLibray from './SidebarLibray'
function sidebar() {
  return (
    <div className="col p-2 sidebar d-none d-lg-block bg-black" style={{ minWidth: "10rem", maxWidth: "25rem", minHeight: "100vh" }}>
      <SidebarHeader/>
      <SidebarLibray/>
    </div>
  )
}

export default sidebar