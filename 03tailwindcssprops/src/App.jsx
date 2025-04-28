
import './App.css'
import Card from './components/card'

function App() {
// let myObj={
//   username:"divyansh",
//   age:23
// }
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl' > TailwindCss Test </h1>
   <Card username="ChaiAurCode" btnText="click me"/>
   <Card username="Divyansh Pandey" btnText="byu me fast"/>

    </>
  )
}

export default App
