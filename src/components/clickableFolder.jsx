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

// Both the closed and open images are rendered from the start and CSS
// switches between them, so the open image is already loaded before the
// first hover. Swapping the src on hover made the first hover wait for a
// download.
function ClickableFolder({ folderType, label, path }) {
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
    <Link to={path} className="folder-link">
      <div className="folder-container">
        {/* Decorative: the visible label below already names the link */}
        <span className="folder-image-stack" aria-hidden="true">
          <img src={images.closed} alt="" className="folder-image folder-image--closed" />
          <img src={images.open} alt="" className="folder-image folder-image--open" />
        </span>
        <p className="folder-label">{label}</p>
      </div>
    </Link>
  );
}

export default ClickableFolder;
