import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function ImageToUpload({ width, height, src }) {
  return (
    <ImgWrapper>
      <img alt="" width={width} height={height} src={src} />
    </ImgWrapper>
  );
}

ImageToUpload.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
};

export default ImageToUpload;

const ImgWrapper = styled.div`
  max-width: "100%";
  max-height: 300;
  overflow: "auto";
  margin-top: "16px";
  margin-bottom: "16px";
`;
