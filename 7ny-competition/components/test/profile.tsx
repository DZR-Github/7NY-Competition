import { Container,Box,Avatar } from "@mui/material"
import MyTabs from "./Tabs"
import UpdataUserInfo from "../form/UpdateUserInfo"

export default function Profile(){
    return(
        <Container maxWidth="lg"  style={{marginTop:20,minWidth:960}}>
         <Box sx={{display:'flex',width:'100%',alignItems:'center',height:180,borderBottom:'1px solid rgba(240, 240, 240, 0.8)'}}>
         <Avatar sx={{width:112,height:112}}></Avatar>
         <div style={{display:'flex',flexDirection:'column',marginLeft:20}}>
         <span>昵称</span>
         <div style={{display:'flex',margin:'5px 0 7px'}}>
         <div style={{display:'flex'}}>
         <div><button style={{color:'rgba(22,24,35,.6)',marginRight:6}}>关注</button></div>
         <div>156</div>
         </div>
         <div style={{display:'flex',padding:'0 16px',margin:'0 16px',border:'1px solid rgba(240, 240, 240, 0.8)',borderBottom:'none',borderTop:'none'}}>
        <div><button style={{color:'rgba(22,24,35,.6)',marginRight:6}}>粉丝</button></div>
        <div>66</div>
        </div>
        <div style={{display:'flex'}}>
        <div style={{color:'rgba(22,24,35,.6)',marginRight:6}}>获赞</div>
        <div>0</div>
        </div>
        </div>
        <span style={{color:'rgba(22,24,35,.6)',fontSize:'14px'}}>账号：66666666</span>
        </div>
        <span style={{marginLeft:200}}><UpdataUserInfo ></UpdataUserInfo></span>
       </Box>
       <MyTabs></MyTabs>
       </Container>
    )
}
