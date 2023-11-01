import React from "react";
import { useEffect,useState } from "react";
import AddIcon from '@mui/icons-material/Add';
const Upload=()=>{
    return(
        <div className="flex gap-5 md:gap-10">
            {/* <Link href=''> */}
            <button className="border-2 border-gray-500 text-black px-2 md:px-4 text-md font-semibold flex items-center gap-2">
                <AddIcon></AddIcon>
                <span className="hidden md:block">上传</span>
            </button>
            {/* </Link> */}
        </div>
    )
}
export default Upload