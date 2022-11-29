import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFav } from "../src/components/Favorites";



function HomePage() {
    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu />
                <Header />
                <Tl playlists={config.playlists} />
                <Favorites favorites={config.favorites} />
            </div>
        </>
    )

}
export default HomePage

const StyledHeader = styled.div`
    .infoU{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px ;
        gap: 16px;
    }

    #giticon{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .banner{
        height: 30vh;
        width: 100vw;
    }

    #desc{
        opacity: 0.8;
    }
   `;

function Header() {
    return (
        <StyledHeader>
            <section className="InfoU">
                <img className="banner" src="https://media.sproutsocial.com/uploads/5b_youtube-cover-photo_labels@1x-1.png" alt="lala" />
                <img className="perfil" id="giticon" src={`https://github.com/${config.github}.png`} />
                    <h2 className="perfil" >{config.name}</h2> 
                    <p id="desc">{config.desc}</p>

            </section>

        </StyledHeader>
    )
}


function Tl(props) {
    const playNames = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {playNames.map((playName) => {
                const videos = props.playlists[playName];
                console.log(playName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playName}</h2>

                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
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

function Favorites (props){
    const favs = props.favorites
    return (
        <StyledFav>
            <h2>Favoritos</h2>
            <div>
                {favs.map(criadores => {
                    return(
                        <section>
                        <h3>
                            {criadores.criador}
                        </h3>
                        <a href={criadores.link}>
                        <img src={criadores.photo}/>
                        </a>
                        </section>
                    )
                })}
            </div>
        </StyledFav>

    )

}