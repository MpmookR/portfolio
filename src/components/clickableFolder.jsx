import { useState } from "react";
import { Link } from "react-router-dom";

function ClickableFolder({ folderType, label, path }) {
  const [isHovered, setIsHovered] = useState(false);

  const folderImages = {
    blue: {
      closed: "/src/assets/images/home/folder/close_blue.png",
      open: "/src/assets/images/home/folder/hover/open_blue.png",
    },
    green: {
      closed: "/src/assets/images/home/folder/close_green.png",
      open: "/src/assets/images/home/folder/hover/open_green.png",
    },
    lightBlue: {
      closed: "/src/assets/images/home/folder/close_LightBlue.png",
      open: "/src/assets/images/home/folder/hover/open_LightBlue.png",
    },
    yellow: {
      closed: "/src/assets/images/home/folder/close_yellow.png",
      open: "/src/assets/images/home/folder/hover/open_yellow.png",
    },
    pink: {
      closed: "/src/assets/images/home/folder/close_pink.png",
      open: "/src/assets/images/home/folder/hover/open_pink.png",
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
