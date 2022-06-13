import { CircularProgress } from "@mui/material";
import { _orange } from "../../styles/_colors";

export default function Loading(props) {
    return (
        <CircularProgress 
        size={100}
        sx={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, 0%)',
            color: _orange
        }}/>
    )
}