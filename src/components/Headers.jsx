/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const Headers = ({ text }) => {

  const headerStyles = css`
    color: whitesmoke;
    text-decoration: underline;
    text-transform: uppercase ;
  `

  return (
    <h1 css={headerStyles}>{text}</h1>
  )
}

export default Headers;