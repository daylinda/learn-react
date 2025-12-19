
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Student.jsx';

import UserGreeting from './UserGreeting.jsx';

import List from './List.jsx';
import ProfilePicture from './ProfilePicture.jsx';

function App() {

  const  fruits = [{id: 1, name:'Apple', calories: 95}, 
                     {id: 2, name:'Banana', calories: 105},
                        {id: 3, name:'Cherry', calories: 50}, 
                      {id: 4, name:'Date', calories: 277}];

  const vegetables = [{id: 1, name:'Carrot', calories: 25},
                      {id: 2, name:'Broccoli', calories: 55},
                      {id: 3, name:'Spinach', calories: 20},
                      {id: 4, name:'Potato', calories: 130}];

  const stonefruits = [];
  return(
    //fragment syntax
    <>
    <Header />
    {/* <Food />
    <Card/>
    <Button /> */}

    {/* <Student name="Davina" age={30} isStudent={true} />
    <Student name="John" age={25} isStudent={false} />
    <Student name="Alice" age={28} isStudent={true} /> 
    <Student name = "Larry" /> */}

    {/* conditional rendering example */}
   {/* <UserGreeting isloggedIn={true} username = "Davina"/> */}


      {/* list components */}
      {/* {fruits.length > 0 && <List items={fruits} categories="Fruits"/>}
      {vegetables.length > 0 && <List items={vegetables} categories="Vegetables"/>}
      {stonefruits.length > 0 && <List items={stonefruits} categories="Stone Fruits"/>} */}


      {/* using click event by passing callbacks */}
      <Button></Button>
      <ProfilePicture />


    <Footer />
    </>
  );
  
  
}

export default App
