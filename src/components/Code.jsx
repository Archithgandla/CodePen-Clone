import React from 'react';
import Editor from './Editor';
import { Box } from '@mui/system';
import styled from '@emotion/styled';
import { DataContext } from '../Context/Dataprovider';
import { useContext } from 'react';


const Container = styled(Box)`
  display:flex;
  background-color:#060606;
  height:50vh;
`


const Code = () => {

  const {html,setHtml,css,setCss,js,setJs} = useContext(DataContext);

  return (
    <Container>
        <Editor
          heading = "HTML"
          icon="/"
          color="blue"
          value={html}
          onChange = {setHtml}
          />
        <Editor
          heading = "CSS"
          icon="*"
          color="green"
          value={css}
          onChange = {setCss}
          />
        <Editor
          heading = "JavaScript"
          icon="{}"
          color="yellow"
          value={js}
          onChange = {setJs}
          />
    </Container>
  )
}

export default Code