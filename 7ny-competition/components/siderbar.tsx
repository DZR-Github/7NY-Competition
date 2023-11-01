import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Home, People, Explore, Slideshow } from "@mui/icons-material";

export default function NestedList() {
  return (
    <List
      sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
        <ListItemIcon style={{ minWidth: "40px" }}>
          <Home />
        </ListItemIcon>
        <ListItemText primary="推荐" style={{ marginTop: "5px" }} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon style={{ minWidth: "40px" }}>
          <People />
        </ListItemIcon>
        <ListItemText primary="已关注" style={{ marginTop: "5px" }} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon style={{ minWidth: "40px" }}>
          <Explore />
        </ListItemIcon>
        <ListItemText primary="探索" style={{ marginTop: "5px" }} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon style={{ minWidth: "40px" }}>
          <Slideshow />
        </ListItemIcon>
        <ListItemText primary="直播" style={{ marginTop: "5px" }} />
      </ListItemButton>
    </List>
  );
}
