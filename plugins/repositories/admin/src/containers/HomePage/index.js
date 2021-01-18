import React, {useState, useEffect, memo } from 'react';
import axios from "axios";
import { Header } from '@buffetjs/custom';
import { Table } from '@buffetjs/core';
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 18px 30px;
`

const HomePage = () => {
  const [rows, setRows] = useState([]);

  useEffect(()=> {
     axios.get("https://api.github.com/users/React-avancado/repos").
     then((res)=> setRows(res.data))
     .catch(e => strapi.notification.error("Ops..github api error"));
  }, []);

  const headers = [
    {
      name: "Name",
      value: "name",
    },
    {
      name: "Description",
      value: "description",
    },
    {
      name: "Url",
      value: "html_url",
    },
  ];

  return (
    <Wrapper>
      <Header 
      title={{label: "React avançado rpositories"}}
      content="A list of our repositories in React avançado course"/>
      <Table headers={headers} rows={rows}/>
    </Wrapper>
  );
};

export default memo(HomePage);
