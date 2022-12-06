import styled from "styled-components";
import DarkModeSwitch from "./components/DarkModeSwitch";
import Search from "./components/Search";

const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
  .logo {
    width: 100%;
    max-width: 80px;
    //text-shadow: 2px 2px blue;
    color: ${({ theme }) => theme.textColorBase};
    @media (min-width: 600px) {
      max-width: 127px;
      scroll-snap-type: x mandatory;
    }
    .text {
      fill: ${({ theme }) => theme.textColorBase || "#222222"};
    }
  }
`;

export default function Menu({valorFiltro, setValorFiltro}) {
  return (
    <StyledMenu>
      <div>
        <Logo />
      </div>
      <Search  valorFiltro={valorFiltro} setValorFiltro={setValorFiltro}/>
      <DarkModeSwitch/>
    </StyledMenu>
  );
}

function Logo() {
  return (
    <h2 className="logo">Projeto Alura</h2>
  )
}