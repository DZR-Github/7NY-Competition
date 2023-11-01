import { AppBar ,Toolbar, styled,Typography,Badge, Avatar} from '@mui/material'
import React from 'react'
import VideoStableIcon from '@mui/icons-material/VideoStable';
import SearchBox from './SearchBox'
import Upload from './Upload';
import {Stack} from "@mui/material";
import AvatarMenu from "../shared/AvatarMenu";

const StyledToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
    backgroundColor:'white'
})



const Topbar=()=>{
    return(
        <AppBar position='sticky'>
         <StyledToolbar>
            <button>
                <Typography variant='h6'sx={{display:{xs:"none",sm:"block"},color:'black',whiteSpace: 'nowrap' }}>WIS-video</Typography>
                <VideoStableIcon sx={{display:{xs:"block",sm:"none"},color:'black'}}></VideoStableIcon>
            </button>
            <SearchBox></SearchBox>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
            <Upload></Upload>
            <AvatarMenu></AvatarMenu>
            </Stack>
         </StyledToolbar>
        </AppBar>
    )
}
export default Topbar