import Styled from 'styled-components'

// RGBA
// --primary-blue: (rgba(11, 60, 93, 1))
// --secondary-blue: (rgba(50, 140, 193,1))
// --yellow:(rgba(217,179,16,1))
// --black:(rgba(29,39,49,1))

export const MainNavWrap = Styled.div`


`
export const NavBar =Styled.nav`

    display:flex ;
    justify-content:space-between;
    height:60px;
    background-color:rgba(11, 60, 93, 1);
    width:100% ;
    color:white;
    padding:0 50px;
    /* border:solid 1px red; */
`

export const Left = Styled.div`
flex:1;
border:solid 1px red;
display:flex ;
align-items:center;
`
    
    

export const Right = Styled.div`
flex:2;
border:solid 1px red;
display:flex ;
justify-content:space-around;
align-items:center;
gap:100px;

ul{
   
    display:flex ;
    justify-content: space-around;
    align-items:center;
    flex:2 ;
    border:solid 1px red;
}
ul li{
    list-style:none;
    border:solid 1px red;
}

ul li a{
    color:white;
    text-decoration:none;
}

`

export const Login = Styled.button`

height:40px ;
width:100px ;

` 

export const Menu = Styled.button`
flex:1;
display:none ;
`
       
        
  



