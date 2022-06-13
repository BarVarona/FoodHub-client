import { Box } from "@mui/material";
import { UtilsService } from "../../services/utils.service";
import { selected_gray } from "../../styles/_colors";
import ProfileIcon from "./ProfileIcon";

const centerFlexDivStyle = {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
};

const centerFlexColDivStyle = {
    ...centerFlexDivStyle,
    flexDirection: 'column',
}

export default function Comment(props) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        }}>
            <Box sx={{
               boxShadow: '1',
               background: selected_gray,
               fontSize: 18,
               minHeight: '50px',
               display: "flex",
               alignItems: "center",
               paddingLeft: '2%',
               borderRadius: '10px'
            }}>{props.content}</Box>
            <div style={{ display: 'flex'  }}>
                <ProfileIcon user={props.user} withName sx={{
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    marginRight: 1,
                    width: 30,
                    height : 30,
                    fontSize: 15
                }}/>
            <p style={{ marginLeft: '2%', marginTop: 'auto', marginBottom: 'auto', fontSize: 10}}>{UtilsService.formatAMPM(props.date)}</p>
            </div>
        </div>
    )
}