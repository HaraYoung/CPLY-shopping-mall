import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import styled from "styled-components";

const Img = styled.div`
  width: 8em;
  height: 8em;
  background-color: #fabf14;
  cursor: pointer;
`;
const Fslight = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <Img onClick={() => setToggler(!toggler)}>
      <FsLightbox
        toggler={toggler}
        sources={["https://i.imgur.com/fsyrScY.jpg"]}
      />
    </Img>
  );
};

export default Fslight;
