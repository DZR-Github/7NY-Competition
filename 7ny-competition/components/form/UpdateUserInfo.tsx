import * as React from 'react';
import { useState ,ChangeEvent,FormEvent,useEffect} from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar/Avatar';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {updateUser,createUser,getUserMsg} from "@/lib/actions/user.actions";
import useUserId from '@/lib/hooks/useUserId';
import { typeUser } from '@/lib/type';
import { uploadFile } from '@/lib/qiniu/qiniu';

// type UpdataUserInfoProps = {
//   currentUser:typeUser | null
//   userId:string | undefined
// };


export default function UpdataUserInfo() {
  // const UserId=props.userId
  // const [user,setUser]=useState<typeUser|null>(props.currentUser)
  const [open, setOpen] = useState(true);
  const [nickname, setNickname] = useState('');
  const [file, setFile] = useState<FormData>();
  const [fileURL, setFileURL] = useState<string>('');
  const [textareaValue, setTextareaValue] = useState('');

  const upload = () => {
    file && uploadFile(file);
  };

  // const CreateUser = () => {
  //   createUser({
  //     userId: UserId!,
  //     username: nickname,
  //     headImg: fileURL,
  //     bio:textareaValue,
  //     collections: [],
  //     likes: [],
  //     follows: [],
  //     fans: [],
  //     beLikes: [],
  //     videos: [],
  //     isOnboarded: false,
  //   })
  //     .then((res) => {
  //       console.log("connect success!");
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };


  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  };

  const handleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
    const Files = event.target.files;
    console.log(event.target.files);
    const formData = new FormData();
    Files && formData.append("image", Files[0]);
     if (Files && Files.length>0) {
      if(fileURL){
        URL.revokeObjectURL(fileURL);
      }
      setFileURL(URL.createObjectURL(Files[0]))
      setFile(formData);
    } 
  };
  
  const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;
      setNickname(value)
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit =async (event: FormEvent) => {
    event.preventDefault();
    URL.revokeObjectURL(fileURL);
    // console.log(user);
    
    // if(file){
    //   upload()
    // }
    // if(user){
    //   updateUser({
    //     userId:UserId!,
    //     username: nickname,
    //     headImg: fileURL,
    //     bio:textareaValue,
    //     collections: user.collections,
    //     likes:user.likes,
    //     follows: user.follows,
    //     fans: user.fans,
    //     beLikes: user.beLikes,
    //     videos: user.videos,
    //     isOnboarded: true,
    //   });
    // }else{
    //   CreateUser()
    // }
    // getUserMsgs()
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleClickOpen} style={{backgroundColor:'rgba(240, 240, 240, 0.8)',color:'black',padding:'8px',borderRadius:'8px'}}>编辑资料</button>
      <Dialog open={open}>
      <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      <DialogTitle sx={{fontWeight:700}}>编辑资料</DialogTitle> 
      <form style={{flexDirection:'column'}} onSubmit={handleSubmit}>
      <DialogContent sx={{width:'430px',margin:'auto',display:'flex',flexDirection:'column'}}>
      <div style={{ display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
      <label htmlFor="file-upload">
      <Avatar src={fileURL} sx={{ width: 80, height: 80,cursor:'pointer'}}></Avatar>
      </label>
      <input
         accept="image/*"
         id="file-upload"
         type="file"
         style={{ display: 'none' }}
         onChange={handleFileInput}
        />
        <span style={{color:'gray',fontSize:'13px',padding:'8px'}}>点击修改头像</span> 
      </div>
      名字
      <div style={{ position: 'relative', display: 'inline-block',backgroundColor: 'rgba(240, 240, 240, 0.8)',borderRadius: '5px',overflow: 'hidden',marginBottom:'20px'}}>
      <input
        type="text"
        value={nickname}
        onChange={handleNicknameChange} // 添加 maxLength 属性限制输入长度
        style={{
          width:'90%',
          backgroundColor: 'rgba(240, 240, 240, 0.8)',
          padding: '5px 10px',
          outline: 'none'
        }}
      />
      {/* <span
        style={{
          position: 'absolute',
          right: '5px',
          bottom: '5px',
          fontSize: '12px',
          color: 'gray',
        }}
      >
        {nickname.length} / 20
      </span> */}
      </div>
      简介
      <textarea 
      value={textareaValue} 
      onChange={handleTextareaChange} 
      style={{outline:'none',backgroundColor: 'rgba(240, 240, 240, 0.8)',borderRadius: '5px',padding:'5px'}}
      rows={5}
      placeholder="简单介绍下你自己"
      />
      </DialogContent>
      <DialogActions sx={{display:'flex',marginBottom:'30px'}}>
      <Button type="submit" size="large" sx={{ fontWeight: 700 }}>
       保存
      </Button>
        <Button onClick={handleClose}>取消</Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
