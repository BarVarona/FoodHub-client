import RecipeCard from "../components/organisms/RecipeCard";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { mock_posts, mock_recipes, mock_reviews } from "../mock/mock";
import ReviewCard from "../components/organisms/ReviewCard";
import PostCard from "../components/organisms/PostCard";
import TopReviewCard from "../components/molecules/TopReviewCard";
import { useEffect } from "react";
import PostPost from "../components/molecules/PostPost";

export default function HomePage(props) {

    // for testing:
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '58%'}}>
                <br></br>
                <PostPost/>
                <List
                    sx={{
                        width: '100%',
                        marginTop: '1%',
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: 600,
                        '& ul': { padding: 0 },
                    }}
                >   
                    <ListItem key={`recipe-1`}>
                        <PostCard {...mock_posts[0]}/>
                    </ListItem>
                    <ListItem key={`recipe-10`}>
                        <ReviewCard {...mock_reviews[0]}/>
                    </ListItem>         
                    <ListItem key={`recipe-0`}>
                        <ReviewCard {...mock_reviews[0]}/>
                    </ListItem>
                    
                    <ListItem key={`recipe-3`}>
                        <RecipeCard {...mock_recipes[0]}/>
                    </ListItem>
                </List>
            </div>
            <div style={{
                width: '27%',
                height: '80%',
                marginLeft: 'auto',
                marginRight: '2%',
                marginTop: '2%',
                marginBottom: 'auto',
            }}>
                <h4 style={{ textAlign: 'left', marginLeft: '5%' }}>Top 3 reviews</h4>
                <TopReviewCard {...mock_reviews[0]} />
                <TopReviewCard {...mock_reviews[0]} />
                <TopReviewCard {...mock_reviews[0]} />
            </div>
        </div>
    );
}
