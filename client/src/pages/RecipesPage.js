import RecipeCard from "../components/organisms/RecipeCard";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { mock_recipes, mock_reviews } from "../mock/mock";
import PostRecipeModal from "../components/organisms/PostRecipeModal";
import { useState } from "react";
import { useEffect } from "react";
import APIService from '../services/api.service';
import Loading from "../components/atoms/Loading";

export default function RecipesPage(props) {

    const [ recipes, setRecipes ] = useState(null);

    const fetchData = async () => {
        const res = await APIService.get(`recipes/timeline?foryou=${props.topMenuOption}`);
        setRecipes(res);
    }

    useEffect(() => {
        setRecipes(null);
        fetchData();
    }, [props.topMenuOption]);

    if (recipes === null) {
        return <Loading/>
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
        }}>
            <PostRecipeModal fetchData={fetchData}/>
            <List
                sx={{
                    width: '60vw',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: '50vw',
                    '& ul': { padding: 0 },
                }}
            >
                {
                !recipes ? <Loading/> :
                recipes.map((recipe, index) => {
                    return (
                        <ListItem key={`recipe-${index}`}>
                            <RecipeCard {...recipe}/>
                        </ListItem>
                    )
                })}
                {/* Bottom Padding */}
                <ListItem><br/><br/><br/><br/></ListItem>
                <ListItem><br/><br/><br/><br/></ListItem>
                <ListItem><br/><br/><br/><br/></ListItem>
            </List>
            
        </div>
    );
}
