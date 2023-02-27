// Emotion setup
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// Styles
const headerStyles = css`
color: whitesmoke;
text-decoration: underline;
text-transform: uppercase ;
`
const Headers = ({ text }) => {

  return (
    <h1 css={headerStyles}>{text}</h1>
  )
}

export default Headers;