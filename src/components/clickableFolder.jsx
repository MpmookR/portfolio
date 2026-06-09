import { useState } from "react";
import { Link } from "react-router-dom";
import folderCloseBlue from "../assets/images/home/folder/close_blue.png";
import folderOpenBlue from "../assets/images/home/folder/hover/open_blue.png";
import folderCloseGreen from "../assets/images/home/folder/close_green.png";
import folderOpenGreen from "../assets/images/home/folder/hover/open_green.png";
import folderCloseLightBlue from "../assets/images/home/folder/close_LightBlue.png";
import folderOpenLightBlue from "../assets/images/home/folder/hover/open_LightBlue.png";
import folderCloseYellow from "../assets/images/home/folder/close_yellow.png";
import folderOpenYellow from "../assets/images/home/folder/hover/open_yellow.png";
import folderClosePink from "../assets/images/home/folder/close_pink.png";
import folderOpenPink from "../assets/images/home/folder/hover/open_pink.png";

function ClickableFolder({ folderType, label, path }) {
  const [isHovered, setIsHovered] = useState(false);

  const folderImages = {
    blue: {
      closed: folderCloseBlue,
      open: folderOpenBlue,
    },
    green: {
      closed: folderCloseGreen,
      open: folderOpenGreen,
    },
    lightBlue: {
      closed: folderCloseLightBlue,
      open: folderOpenLightBlue,
    },
    yellow: {
      closed: folderCloseYellow,
      open: folderOpenYellow,
    },
    pink: {
      closed: folderClosePink,
      open: folderOpenPink,
    },
  };

  const images = folderImages[folderType] || folderImages.blue;

  return (
    <Link
      to={path}
      className="folder-link"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="folder-container">
        <img
          src={isHovered ? images.open : images.closed}
          alt={label}
          className="folder-image"
        />
        <p className="folder-label">{label}</p>
      </div>
    </Link>
  );
}

export default ClickableFolder;
