import { mock_reviews } from "../mock/mock";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ReviewCard from "../components/organisms/ReviewCard";
import PostReviewModal from "../components/organisms/PostReviewModal";

export default function ReviewsPage(props) {
    return (
        <div style={{ display: 'flex'}}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '55%',
            }}>
                <PostReviewModal/>
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
                    {mock_reviews.map((review, index) => {
                        return (
                            <ListItem key={`review-${index}`}>
                                <ReviewCard {...review}/>
                            </ListItem>
                        )
                    })}
                </List>
            </div>
         </div>
    );
}
