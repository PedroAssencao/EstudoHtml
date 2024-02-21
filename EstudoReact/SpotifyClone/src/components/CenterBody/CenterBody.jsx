import CenterBodyheader from "./CenterBodyHeader"
import CenterBodyCarrosel from "./CenterBodyCarrosel"
function CenterBody() {
    return (
        <div className="col bodyFull rounded-3 mt-2 overflow-y-auto overflow-x-hidden" style={{ minHeight: "100vh" }}>
            <CenterBodyheader />
            <CenterBodyCarrosel />
        </div>
    )
}

export default CenterBody
