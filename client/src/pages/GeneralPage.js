import HomePage from "./HomePage";
import LogoCard from "../components/atoms/LogoCard";
import SideMenu from "../components/organisms/SideMenu";
import TopMenu from "../components/organisms/TopMenu";
import { useState } from "react";
import ReviewsPage from "./ReviewsPage";
import { AppPages } from "../consts/pages.const";
import RecipesPage from "./RecipesPage";
import FriendsPage from "./FriendsPage";
import AboutPage from "./AboutPage";


export default function GeneralPage(props) {
    const [ activePage, setActivePage ] = useState(AppPages.REVIEWS);
    const [ activeProfile, setActiveProfile ] = useState(null);
    const [ topMenuOption, setTopMenuOption ] = useState(0);

    const getPageElement = (page) => {
        switch (page) {
            case AppPages.HOME:
                return <HomePage topMenuOption={topMenuOption}/>;
            case AppPages.REVIEWS:
                return <ReviewsPage topMenuOption={topMenuOption}/>;
            case AppPages.RECIPES:
                return <RecipesPage topMenuOption={topMenuOption}/>;
            case AppPages.FRIENDS:
                return <FriendsPage topMenuOption={topMenuOption}/>;
            case AppPages.ABOUT:
                return <AboutPage topMenuOption={topMenuOption}/>;
            case AppPages.PROFILE:
                return <ProfilePage topMenuOption={topMenuOption} profileId={activeProfile}/>;
            default:
                return <HomePage topMenuOption={topMenuOption}/>;
        }
    }



    return <div style={{
        display: 'grid',
        gridTemplateRows: '1fr 11fr',
        gridTemplateColumns: '1fr 11fr',
    }}>
        <LogoCard/>
        <TopMenu
            activePage={activePage}
            setActivePage={setActivePage}
            topMenuOption={topMenuOption}
            setTopMenuOption={setTopMenuOption}
        />
        <SideMenu activePage={activePage} setActivePage={setActivePage}/>
        { getPageElement(activePage) }
    </div>;
}

// TODO: think of more elegant solution
