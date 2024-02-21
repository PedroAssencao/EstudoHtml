import CenterBodyheaderCards from "./CenterBodyHeaderCards"
function CenterBodyheader() {
    return (
        <div className='header ms-3' style={{ marginTop: "3%" }}>
            <h1 className='text-light'>
                Good Morning
            </h1>
            <div className='container-fluid'>
                <div className='row row-cols-5 gap-3'>
                    <CenterBodyheaderCards />
                </div>
            </div>

        </div>
    )
}

export default CenterBodyheader