import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    //console.log(config.playlists);
    return (
    <>
        <CSSReset/>
        <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,}}> 
            <Menu/>
            <Header/>
            <Tl playlists={config.playlists} />
        </div>
       </>    
    )

}
export default HomePage

const StyledHeader = styled.div`
    img{
        margin-top: 60px;
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .infoU{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px ;
        gap: 16px;
    }
   `;

function Header() {
    return (
        <StyledHeader>
            {/*< img src="banner"/>*/}

            <section className="InfoU">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.desc}</p>
                </div>

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
                                    <a href="video.url">
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
            })};
        </StyledTimeline>
    )
}