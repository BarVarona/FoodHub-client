import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import GroupIcon from '@mui/icons-material/Group';
import InfoIcon from '@mui/icons-material/Info';

export const AppPages = {
    HOME: 'HOME',
    REVIEWS: 'REVIEWS',
    RECIPES: 'RECIPES',
    FRIENDS: 'FRIENDS',
    ABOUT: 'ABOUT',
    PROFILE: 'PROFILE',
}

export const AppPagesTitles = {
    HOME: 'Home',
    REVIEWS: 'Reviews',
    RECIPES: 'Dish come true',
    FRIENDS: 'My friends',
    ABOUT: 'About',
}

export const AppPagesTopMenu = {
    HOME: ['FOLLOWING', 'FOR YOU'],
    REVIEWS: ['FOLLOWING', 'FOR YOU'],
    RECIPES: ['FOLLOWING', 'FOR YOU'],
    FRIENDS: ['MY FRIENDS'],
    ABOUT: ['ABOUT US'],
    PROFILE: ['MY PROFILE'],
}

export const AppPagesIcons = {
    HOME: <HomeIcon fontSize="small"/>,
    REVIEWS: <ListIcon fontSize="small"/>,
    RECIPES: <LunchDiningIcon fontSize="small"/>,
    FRIENDS: <GroupIcon fontSize="small"/>,
    ABOUT: <InfoIcon fontSize="small"/>,
}