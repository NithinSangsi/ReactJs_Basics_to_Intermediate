// import Header from './Header.jsx'
// import Footer from './Footer.jsx'
// import Food from './Food.jsx'
// import Card from './Card.jsx'
// import Button from './Button.jsx'
// import Button from './Button/Button.jsx'
// import Student from './Student.jsx'
// import UserGreeting from './UserGreeting.jsx'
// import List from './List.jsx'
// import Button1 from './button1.jsx'
// import Propic from './Propic.jsx'
// import Mycomp from './mycomp.jsx'
// import Counter from'./counter.jsx'
// import Colpic from './colpick.jsx'
// import Todolist from './todolist.jsx'
// import Digiclock from './digiclock.jsx'
import CompA from './component1.jsx';
import CompB from './component2.jsx';
import CompC from './component3.jsx';
import CompD from './component4.jsx';
//import StopWatch from './stopwatch.jsx';


function App() {
    // return(
    // <Header></Header>    <Header/>---it is ahorthand way or writing and it is also correct
    // when we are using more than one component here put all the components in between (   JSX Fragement <></>   )
    // <>      
                      {/* <Header/>
                      <Footer/>   */}
                      {/* <Food/>  */}
                    {/* <Card/> <Card/> <Card/>       three times produce three cards */}
                          
    {/* //how to add css styles
      //(not including the ecxternal frameworks and preprocessors)
      //1.External (writing index.css)  2.Modules (writing in the seperate file)--it avoids naming conflict 3.inline   */}
                            {/* <Button/> */}
    {/* //PROPS in REACT-read-only properties that are shared between components.A parent component can send data to the child component.  <componenet key=value/>  */}
            {/* <Student name="Nithin Sangsi" age={22} isMarried={false} designation="Business Man" salary={10000000}/>  */}    {/*here if at the age place if we enter the strings there  will be no change in the browser op but warning is issued in the console     */}
             {/*<Student name="Harsha" age={21} isMarried={false} designation="Business Man" salary={10000000} />
            <Student name="Kanna" age={21} isMarried={false} designation="World's Greatest Photographer" salary={10000000} />
            <Student name="vidya" age={24} isMarried={true} designation="World's top entrepreneur" salary={10000000} /> 
            <Student/>*/}
    {/* Conditional rendering = allows you to control what gets rendered in your application based on certain conditions (show,hide, or change components) */}
                {/* <UserGreeting isloggedin ={true} username ="Nithin"/>  
                <UserGreeting/>
                <UserGreeting isloggedin={true}/> */}
    {/* Rendering lists in react js*/}
            // <List/>
            // const fruits =
            // []
            // [{id:1,name:"apple",calories:95},
            //                {id:2,name:"banana",calories:100},
            //                {id:3,name:"orange",calories:45},
            //                {id:4,name:"coconut",calories:159},
            //                {id:5,name:"pineapple",calories:37}]; 
            //  const vegetables =
            //  []
            //  [{id:1,name:"carrot",calories:65},
            //                      {id:2,name:"brocolli",calories:103},
            //                      {id:3,name:"tomato",calories:59},
            //                      {id:4,name:"potato",calories:68},
            //                      {id:5,name:"brinjal",calories:77}]; 
            return(
            <>
            {/* {fruits.length > 0 &&  <List items ={fruits} category="FRUITS"/> }
            {vegetables.length > 0 &&  <List items ={vegetables} category="VEGETABLES"/>} */}
            {/* {fruits.length > 0 ?  <List items ={fruits} category="FRUITS"/> : null }
            {vegetables.length > 0 ?  <List items ={vegetables} category="VEGETABLES"/> : null } */}
            {/* <List items ={fruits} category="FRUITS"/>
            <List items ={vegetables} category="VEGETABLES"/> */}
                {/* click events */}
            {/* <Button1/> */}
            {/* <Propic/> */}
    {/* UseState() hook */}
                {/* <Mycomp/> */}
                {/* <Counter/> */}
    {/*onChange EH*/}
                  {/* <Mycomp/> */}
    {/* ColorPicker */}
              {/* <Colpic/> */}
    {/* Updater functions */}
    {/* update the state of an array */}
    {/* update the state of array objects */}
    {/* useEffect() React Hook */}
    {/* .useRef() */}
              {/* <Mycomp/> */}
    {/* Ṭo Do List */}
              {/* <Todolist/> */}
    {/* DigitalClock */}
              {/* <Digiclock/> */}
    {/* useContext() React Hook */}
              <CompA/>
              <CompB/>
              <CompC/>
              <CompD/>
    {/* STOPWATCH */}
        {/* <StopWatch/>     */}

    </>);   
  } 
export default App
