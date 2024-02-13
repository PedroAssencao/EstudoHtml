import Header from './header'
import Centro from './Centro'
function container() {
    return (
        <div className='container my-auto bg-white border rounded-5' style={{ width: "26rem", height: "40rem" }}>
            <Header/>
            <Centro/>
        </div>
    )
}

export default container