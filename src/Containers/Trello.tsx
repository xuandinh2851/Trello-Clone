import { Button, Card, Col, Row, Space } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

type Card = {
  id: string;
}

type DataColumn = {
  id: string;
  cards: Card[] | [];
}


const Trello: React.FC = () => {
 

  return (
    <section className="trello-wrapper">
      <h1>ádjhasdasv</h1>
    </section>
  );
};

export default Trello;