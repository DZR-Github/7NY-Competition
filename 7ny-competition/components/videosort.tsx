import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/material";

const options = [
  "美食类",
  "情感类",
  "体育类",
  "生活类",
  "教育类",
  "旅行类",
  "二次元类",
  "汽车类",
];

export default function ControllableStates() {
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div>
      <br />
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderOption={(props, options) => (
          <Box component="li" {...props} key={options}>
            {options}
          </Box>
        )}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            key={params.toString()}
            {...params}
            label="请选择视频种类"
          />
        )}
      />
    </div>
  );
}
