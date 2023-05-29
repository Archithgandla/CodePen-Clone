import React from 'react'
import { Box,styled } from '@mui/system'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import CodeMirror from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css'
import "../App.css";
import { useState } from 'react';


const Container = styled(Box)`
    flex-grow:1;
    flex-basis:0;
    display:flex;
    flex-direction:column;
    padding:0px 8px;
`



const Heading = styled(Box)`
    background:#1d1e22;
    display:flex;
    padding:9px 12px;

`
const Header = styled(Box)`
    display:flex;
    justify-content:space-between;
    background:#060606;
    color:#AAAEBC;
    font-weight:400
`

const Editor = ({heading,icon,color,value,onChange}) => {


    function handleChange(editor,data,value){
        onChange(value);
    }

    const [open,setOpen] = useState(true);

  return (
    <Container style = {open?null:{flexGrow:0}}>
        <Header>
            <Heading>
                <Box component = "span"
                    style={{
                        background:color,
                        height:20,
                        width:20,
                        display:"flex",
                        placeContent:"center",
                        borderRadius:5,
                        marginRight:5,
                        paddingBottom:2,
                        color:"black"
                    }}
                >
                    {icon}
                </Box>
                {heading}
            </Heading>
            <CloseFullscreenIcon 
                fontSize='small'
                style={{alignSelf:'center'}}
                onClick = {function(){
                    setOpen(!open);
                }}/>
        </Header>

        <ControlledEditor 
        className='controlled-editor'
        value={value}
        onBeforeChange={handleChange}
        options={{
            theme:'material',
            lineNumbers:true,
            fontSize:30,
        }}/>
    </Container>
  )
}

export default Editor