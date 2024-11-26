import React from "react";
import PropTypes from "prop-types";

function OverlayImages({ primaryImg, secondaryImg, primaryAlt, secondaryAlt }) {
  return (
    <div className="image-overlay">
      <img
        src={primaryImg}
        alt={primaryAlt || "Primary image"}
        className="image image-primary"
      />
      <img
        src={secondaryImg}
        alt={secondaryAlt || "Secondary image"}
        className="image image-secondary"
      />
    </div>
  );
}

OverlayImages.propTypes = {
  primaryImg: PropTypes.string.isRequired,
  secondaryImg: PropTypes.string.isRequired,
  primaryAlt: PropTypes.string,
  secondaryAlt: PropTypes.string,
};

export default OverlayImages;
