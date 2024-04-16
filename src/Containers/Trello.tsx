import { Button, Card, Col, Row, Space } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

type Tag = {
  id: string;
  title: string;
}

type DataList = {
  id: string;
  tags: Tag[] | [];
}

const Trello: React.FC = () => {
  return (
    <section className="trello-wrapper">
      <header>
        <h1>Trello Clone</h1>
      </header>
      <main>
        <ol id="board">
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ol>
      </main>
      {/* Add another listing
      Add tag */}
    </section>
  );
};

export default Trello;