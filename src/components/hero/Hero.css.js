import Styled from 'styled-components'


export const Wrapper = Styled.div`
 display:flex;
    width:92vw;
    height:100vh;
    margin:0 auto;
    /* border:solid 1px red; */
    justify-content:center;
    align-items:center;
    .left img{
        width:100% ;
    }
    .left {
       
       flex:1;
       /* border: 1px red solid; */
     
    }
    .right{
     flex:1 ;
     text-align:center;
     /* border: 1px red solid; */
     h1{
         
         font-size:3rem;
         font-family: 'Roboto Flex', sans-serif;
     }
    }
  `