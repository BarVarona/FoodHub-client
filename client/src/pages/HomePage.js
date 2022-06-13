import RecipeCard from "../components/organisms/RecipeCard";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { mock_posts, mock_recipes, mock_reviews } from "../mock/mock";
import ReviewCard from "../components/organisms/ReviewCard";
import PostCard from "../components/organisms/PostCard";
import TopReviewCard from "../components/molecules/TopReviewCard";
import { useEffect } from "react";
import PostPost from "../components/molecules/PostPost";
import { useState } from "react";
import APIService from '../services/api.service';
import { CircularProgress } from "@mui/material";
import Loading from "../components/atoms/Loading";

export default function HomePage(props) {

    const [ data, setTimeLine ] = useState(null);

    const fetchData = async () => {
        const res = await APIService.get(`general/timeline?foryou=${props.topMenuOption}`);
        setTimeLine(res);
    }

    useEffect(() => {
        setTimeLine(null);
        fetchData();
    }, [props.topMenuOption]);

    if (data === null) {
        return <Loading />
    }
    
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '58%'}}>
                <br></br>
                <PostPost fetchData={fetchData}/>
                <List
                    sx={{
                        width: '50vw',
                        marginTop: '1%',
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: '50vw',
                        '& ul': { padding: 0 },
                    }}
                >
                {
                    !data.timeline ? <Loading/> :
                    data.timeline.map((element, index) => {
                        return (
                            <ListItem key={`element-` + index}>
                                {
                                    element.type === "Post" ?
                                    <PostCard {...element}/> :
                                    element.type === "Review" ?
                                    <ReviewCard {...element}/> :
                                    <RecipeCard {...element}/>
                                }
                                
                            </ListItem>
                        );
                    })
                }
                {/* Bottom Padding */}
                <ListItem><br/><br/><br/><br/></ListItem>
                <ListItem><br/><br/><br/><br/></ListItem>
                <ListItem><br/><br/><br/><br/></ListItem>
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
                <h4 style={{ textAlign: 'left', marginLeft: '5%', fontSize: '1.2vw' }}>Top 3 reviews</h4>
                <TopReviewCard {...data.topReviews[0]} />
                <TopReviewCard {...data.topReviews[1]} />
                <TopReviewCard {...data.topReviews[2]} />
            </div>
        </div>
    );
}
