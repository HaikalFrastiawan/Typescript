import React, { useState } from 'react';


import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/button';
import { Input } from './components/Input';
import { Submit } from './components/Submit';
import { Container } from './components/Container';
import { Greeting } from './components/Greeting-Lat1';

function App() {
  const personame = {
    first : 'Haikal',
    last : 'Frastiawan',
  }

  const nameList = [
    {first: 'kal ',
      last: 'Bruce'
    },
    {first: 'Clark ',
      last: 'wayne'
    },
    {first: 'Princess ',
      last: 'Diana'
    },
  ]
    const handleSubmmit = (event: React.FormEvent<HTMLFormElement>) =>{
      event.preventDefault()  //untuk reload
      console.log('form submited')
    }


      const [text, setText] = useState('')


      


  return (
    <div className='App'> 
    
    <Person name = {personame} /> 
    <PersonList names =  {nameList} />
    <Status status = 'loading' />
    <Heading> PlaceHolder </Heading>

    <Oscar>
      <Heading>Oscar goes to dicaprio</Heading>
    </Oscar>
    <Greet name = 'Haikal'  MessageCount={10} isLoggin={false} />




    <Button 
    handleClick={ (event,id)=>{
      console.log('Button Clicked', event,id)
    }} />



     <Input
        value={text}
        handleChange={(event) => {
          setText(event.target.value); // ubah value input
          console.log(event.target.value); // tampilkan di console
        }}
      />

    

    <h1>
      form submit example
    </h1>
    <Submit value='kirim ' submitEvent={handleSubmmit}


     />

    <Container style={{border: '1px solid black', padding: '1 rem'}} />


    <Greeting name ='Haikal' age={20}/>
    </div>
  );
}

export default App;
