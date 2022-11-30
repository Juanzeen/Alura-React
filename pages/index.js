import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFav } from "../src/components/Favorites";




function HomePage() {

    const [valorFiltro, setValorFiltro] = React.useState("")

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu valorFiltro={valorFiltro} setValorFiltro={setValorFiltro} />
                <Header />
                <Tl searchValue={valorFiltro} playlists={config.playlists} />
                <Favorites favorites={config.favorites} />
            </div>
        </>
    )

}
export default HomePage

const StyledHeader = styled.div`
    .InfoU{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        padding: 16px 32px ;
        gap: 16px;
    }

    #giticon{
        display: flex;
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    #desc{
        opacity: 0.8;
    }

   `;

   const StyledBanner = styled.div`
   background-image:url(${config.banner}) ;
   height: 230px;
   `


function Header() {
    return (
        <StyledHeader>
            <StyledBanner/>
            <section className="InfoU">
                <img id="giticon" src={`https://github.com/${config.github}.png`} />
                <div className="ttlanddesc">
                    <h2 >{config.name}</h2>
                    <p id="desc">{config.desc}</p>
                </div>
            </section>
        </StyledHeader>
    )
}


function Tl({ searchValue, ...props }) {
    const playNames = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {playNames.map((playName) => {
                const videos = props.playlists[playName];
                return (
                    <section key={playName }>
                        <h2>{playName}</h2>

                        <div>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase();
                                const searchValueNormalized = searchValue.toLowerCase()
                                return (titleNormalized.includes(searchValueNormalized))
                            })
                                .map((video) => {
                                    return (
                                        <a key={video.url} href={video.url}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}

function Favorites(props) {
    const favs = props.favorites
    return (
        <StyledFav>
            <h2>Favoritos</h2>
            <div>
                {favs.map(criadores => {
                    return (
                        <section>
                            <h3>
                                {criadores.criador}
                            </h3>
                            <a href={criadores.link}>
                                <img src={criadores.photo} />
                            </a>
                        </section>
                    )
                })}
            </div>
        </StyledFav>

    )

}