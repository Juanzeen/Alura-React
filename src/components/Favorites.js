import styled from "styled-components";

export  const StyledFav = styled.div`
  width: 100%;
  padding: 16px;
  overflow: hidden;
  
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
    margin-left: 15px;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  div{
    margin-left: 15px;
    display: flex;
    justify-content: flex-start;
    width: 100vw;
    @media (max-width: 624px) {
      margin-left: none;
      width: 100vw;
      flex-wrap: wrap;
    }
 
  }

  section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  section :not(:first-child){
    margin-left: 15px;
  }

  section :nth-child(2){
    margin-right: 15px;
  }


  h3{
    flex-wrap: wrap;
    font-size: 14px;
    text-align: center;
  }

  
`