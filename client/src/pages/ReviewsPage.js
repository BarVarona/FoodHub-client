import { mock_reviews } from "../mock/mock";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ReviewCard from "../components/organisms/ReviewCard";
import PostReviewModal from "../components/organisms/PostReviewModal";
import { useState } from "react";
import { useEffect } from "react";
import APIService from '../services/api.service';
import Loading from "../components/atoms/Loading";

export default function ReviewsPage(props) {

    const [ reviews, setReviews ] = useState(null);

    const fetchData = async () => {
        const res = await APIService.get(`reviews/timeline?foryou=${props.topMenuOption}`);
        setReviews(res);
    }

    useEffect(() => {
        setReviews(null);
        fetchData();
    }, [props.topMenuOption]);

    if (reviews === null) {
        return <Loading/>
    }

    return (
        <div style={{ display: 'flex'}}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '55%',
            }}>
                <PostReviewModal fetchData={fetchData}/>
                <List
                    sx={{
                        width: '60vw',
                        marginTop: '0',
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: '50vw',
                        '& ul': { padding: 0 },
                    }}
                >
                    
                    {
                    !reviews ? <Loading/> :
                    reviews.map((review, index) => {
                        return (
                            <ListItem key={`review-${index}`}>
                                <ReviewCard {...review}/>
                            </ListItem>
                        )
                    })}
                    {/* Bottom Padding */}
                    <ListItem><br/><br/><br/><br/></ListItem>
                    <ListItem><br/><br/><br/><br/></ListItem>
                    <ListItem><br/><br/><br/><br/></ListItem>`
                </List>
            </div>
         </div>
    );
}
