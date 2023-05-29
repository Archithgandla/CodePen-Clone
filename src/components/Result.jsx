import { Box,styled } from "@mui/system";
import { DataContext } from "../Context/Dataprovider";
import React, { useContext } from 'react'
import { useEffect,useState } from "react";

const Container = styled(Box)`
    height:41vh
`

const Result = () => {
  
    const {html,css,js} = useContext(DataContext);
    
    const [src,setSrc] = useState('');

    const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `
  
    useEffect(function(){
        const timeOut = setTimeout(() => {
            setSrc(srcCode)
        }, 1000);
        return () => clearTimeout(timeOut);
    },[html,css,js])



    return (
        <Container>
            <iframe
                srcDoc={src}
                title="output"
                sandbox="allow-scripts"
                width="100%"
                height="100%"
            />
        </Container>
  )
}

export default Result




