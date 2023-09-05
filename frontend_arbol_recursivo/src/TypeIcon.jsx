import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DescriptionIcon from "@mui/icons-material/Description";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';


export const TypeIcon = (props) => {
  if (props.droppable) {
    if (props.isOpen) {  // Asumiendo que añades la propiedad `isOpen` 
      return <FolderOpenIcon />;
    }
    return <FolderIcon />;
  }

  switch (props.fileType) {
    case "image":
      return <ImageIcon />;
    case "csv":
      return <ListAltIcon />;
    case "text":
      return <DescriptionIcon />;
    default:
      return null;
  }
};