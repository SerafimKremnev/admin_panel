import React from 'react';
import {Breadcrumbs, Typography} from "@mui/material";

interface LocationProps {

}
const Location = ({location}: LocationProps) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {location.folder && <Typography
        underline="hover"
        color="inherit"
      >
        {location.folder.name}
      </Typography>}
      {location.list && <Typography color="text.primary">{location.list.name}</Typography>}
    </Breadcrumbs>
  );
};

export default Location;