import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { AutocompleteInputChangeReason } from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect} from 'react';
import { getAllVideos } from '@/lib/actions/video.actions';
import { Box } from '@mui/material';
import { typeVideo } from '@/lib/type';

async function fetchVideo() {
  try {
    const { res: result } = await getAllVideos();
    return result;
  } catch (error) {
    console.error("Error retrieving videos:", error);
  }
  }

const SearchBox = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [options, setOptions] = useState<typeVideo[]>([]);
    // const [allVideos,setAllVideos]=useState<typeVideo[]>([]);
    // useEffect(() => {
    //   fetchVideo().then(result => {
    //     setAllVideos(result as typeVideo[]);
    //     setOptions(result as typeVideo[]);
    //   });
    // }, []);

    const handleInputChange = (event: React.SyntheticEvent<Element, Event>,
        value: string) => {
      setInputValue(value);
      //根据输入内容更新选项
      const filteredOptions = options.filter(option =>
        option.videoId.toLowerCase().includes(value.toLowerCase())
      );
      setOptions(filteredOptions);
    };

  return (
    <Autocomplete
     sx={
        {
            width:'30%',
            marginLeft:'5%',
        }
     }
      freeSolo
      options={options}
      getOptionLabel={(option)=>(option as typeVideo).videoId}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      renderOption={(props,options)=>(
        <Box component='li' {...props} key={options.videoId} >
         {options.videoURL}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
         sx={{
                 display:{xs:'none',md:'flex'},
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderRadius:20
                },
              }}}
          InputProps={{
            ...params.InputProps,
            type: 'search',
            endAdornment: (
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            )
          }}
        />
      )}
    />
  );
};

export default SearchBox;