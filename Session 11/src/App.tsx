import './App.css'
import UserLayout from './component/Bai7/UserLayout'
// import AdminIndex from './component/Bai6/AdminIndex'
// import FormatName from './component/FormatName'
// import ColorBox from './component/ColorBox'
// import ListCourse from './component/ListCourse'
// import Calculation from './component/Calculation'
// import UserInfo from './component/UserInfo'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <ListCourse></ListCourse>
      <Calculation></Calculation>
      <UserInfo></UserInfo> */}
      {/* <div style={{display: "flex", gap : "10px"}}>
        <ColorBox color="red"></ColorBox>
        <ColorBox color="blue"></ColorBox>
        <ColorBox color="green"></ColorBox>
      </div> */}
      {/* <FormatName user={{ firstName: "Nguyễn Văn", lastName: "Nam" }}></FormatName> */}
      {/* <AdminIndex></AdminIndex> */}
      <UserLayout></UserLayout>
    </>
  )
}

export default App
