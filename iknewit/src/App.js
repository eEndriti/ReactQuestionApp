import Button from 'react-bootstrap/Button';
import './App.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { useState } from "react";
import React, { useRef } from 'react';

function App() {
    const ChipStyles = useRef({
        margin: Math.random()*(100-50)+30,
        
        
        
    });
  const [Text, setText] = useState("Are you dumb?");
  return (
    <Container>
        
    <Row className="Row">
      <div className="frame">
            <h2></h2>
            <center><h1>{Text}</h1></center>
           <Button className=" btn btn1" color="light" onClick={() => {setText("I knew it! :3");}}>YES</Button> 
           <Button className=" btn btn2" color="light" style={ChipStyles.current} onClick={() => {window.location.reload(true);}}>NO</Button>
      </div>
    </Row>
    
  </Container>
  );
 
}
export default App;
