//All React Functions shall return a XML content of HTML tags. 
import Calc from "./Calc"
import Footer from "./Footer"
import Header from "./Header"
import PropsInfo from "./PropsInfo"
import StatefullComponents from "./StatefullComponents"
import StatefulTodoApp from "./StatefulTodoApp"
import UserInfo from "./userinfo"
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-3 m-2 ">
            <UserInfo />
          </div>
          <div className="col-md-4 m-2">
            <PropsInfo name="Phaniraj" age={25} isEmployee={true} />
          </div>
          <div className="col-md-4 m-2">
            <Calc />
          </div>
          <div className="col-md-4 m-2">
            <StatefullComponents/>
          </div>
          <div className="col-md-4 m-2">
            <StatefulTodoApp/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
