import { Avatar, List, ListItem, Paper } from "@mui/material";
import { red } from "@mui/material/colors";
import PostCard from "../components/organisms/PostCard";
import RecipeCard from "../components/organisms/RecipeCard";
import ReviewCard from "../components/organisms/ReviewCard";
import { mock_posts, mock_recipes, mock_reviews } from "../mock/mock";
import { selected_gray, _orange } from "../styles/_colors";
import ReceiptIcon from '@mui/icons-material/Receipt';
import FastfoodIcon from '@mui/icons-material/Fastfood';

export default function ProfilePage(props) {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', }}>
            <div style={{ display: 'flex', height: '28%', background: selected_gray }}>
                <div style={{
                    display: 'flex',
                    width: '50%',
                    marginBottom: 'auto',
                    marginTop: '3%',
                    marginLeft: '5%'
                }}>
                <Avatar sx={{
                    bgcolor: red[500],
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    marginRight: 1,
                    width: 130,
                    height: 130,
                    fontSize: 60
                }} aria-label="profile">AF</Avatar>
                <h2 style={{ width: '30%', paddingTop: '5%'}}>Amit Falshpan</h2>
                </div>
                <div style={{ display: 'flex', width: '50%'}}>
                    <div style={{
                        display: 'flex',
                        width: '75%',
                        height: '30%',
                        marginTop: 'auto',
                        marginBottom: '3%'
                    }}>
                        <Paper sx={{width: '25%'}}>
                            <p style={{ fontWeight: 'bold', marginBottom: '0'}}>{400}</p>
                            <p style={{ marginTop: '0'}}>Followers</p>
                        </Paper>
                        <Paper sx={{width: '25%'}}>
                            <p style={{ fontWeight: 'bold', marginBottom: '0'}}>{400}</p>
                            <p style={{ marginTop: '0'}}>Following</p>
                        </Paper>
                        {/* TODO */}
                        <Paper className='pointer' sx={{
                            width: '50%',
                            background: _orange,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: 'white',
                            fontSize: 22
                        }} onClick={() => {
                            alert('TODO: send follow/unfollow request to the api')
                        }}> {false ? '+Follow' : 'Unfollow'} </Paper>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', height: '66%', paddingLeft: '3%' }}>
                <div style={{ width: '50%' }}>
                    <p style={{ textAlign: 'left' }}>Amit's most recent activity</p>
                    {/*  for testing: */}
                    <List
                        sx={{
                            width: '100%',
                            marginTop: '1%',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 600,
                            '& ul': { padding: 0 },
                            // boxShadow: '3'
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
                <div style={{ width: '50%' }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '50%',
                            marginLeft: 'auto',
                            marginRight: '8%',
                        }}>
                            <p style={{ textAlign: 'left'}}>Amit's stats</p>
                            <Paper sx={{
                                background: selected_gray,
                                boxShadow: 2,
                                display: "flex",
                                padding: '5%',
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    marginLeft:'10%',
                                    width: '50%',
                                }}>
                                    <p style={{ marginBottom: '10%'}}>{32}{'\n'}Reviews</p>
                                    <ReceiptIcon/>
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    marginLeft: 'auto',
                                    marginRight: '10%',
                                    width: '50%'
                                }}>
                                    <p style={{ marginBottom: '10%'}}>{32}{'\n'}Recipes</p>
                                    <FastfoodIcon/>
                                </div>
                            </Paper>
                        </div>
                </div>
            </div>
        </div>
    );
}
