import Announcements from "../components/Home Components/Announcements";
import Header from "../components/Home Components/Header";
import LatestChapters from "../components/Home Components/LatestChapters";
import NewRelease from "../components/Home Components/NewRelease";
import Popular from "../components/Home Components/Popular";

const Home = () =>{
    return(
        <div className="w-full">
            <Header/>
            <Announcements/>
            <NewRelease/>
            <Popular/>
            <LatestChapters/>
        </div>
    )
}

export default Home;