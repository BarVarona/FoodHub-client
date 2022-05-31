import RecipeCard from "../components/organisms/RecipeCard";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { mock_recipes, mock_reviews } from "../mock/mock";
import PostRecipeModal from "../components/organisms/PostRecipeModal";

export default function RecipesPage(props) {

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
        }}>
            <PostRecipeModal/>
            <List
                sx={{
                    width: '70%',
                    // marginTop: '1%',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 600,
                    '& ul': { padding: 0 },
                }}
            >
                {mock_recipes.map((recipe, index) => {
                    return (
                        <ListItem key={`recipe-${index}`}>
                            <RecipeCard {...recipe}/>
                        </ListItem>
                    )
                })}
            </List>
            
        </div>
    );
}
