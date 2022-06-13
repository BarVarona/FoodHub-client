import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import { _orange } from '../../styles/_colors';
import { useState } from 'react';
import { Box, List, ListItem, Modal } from '@mui/material';
import Comment from '../molecules/Comment';
import PostComment from '../molecules/PostComment';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '5px'
  };

export default function CommentsModal(props) {
    const [comments, setComments] = useState(props.comments);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
        <IconButton sx={{ width: 50, height: 50, }} aria-label="comments" onClick={handleOpen}>
            <ForumIcon sx={{ width: 20, height: 20, color: _orange }}/>
            <h5 style={{ fontSize: '1.15vw', color: _orange }}>{comments.length}</h5>
        </IconButton>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <List
                    sx={{
                        width: '100%',
                        marginTop: '1%',
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: 400,
                        '& ul': { padding: 0 },
                    }}
                >
                {
                    comments.length > 0 ?
                    comments.sort((a, b) => {
                        return new Date(b.date).getTime() - new Date(a.date).getTime()
                    }).map((comment, index) => {
                        return (
                            <ListItem key={`element-` + index}>
                                <Comment {...comment}/>
                            </ListItem>
                        );
                    }) :
                    <p style={{ fontSize: '1.5vw', textAlign: 'center', color: _orange}}>Be the first one to comment!</p>
                }
                </List>
                <PostComment onClick={async (commentContent) => {
                    const res = await props.onClick(commentContent);
                    setComments([...res]);
                }}/>
            </Box>
        </Modal>
        </div>
    );
}