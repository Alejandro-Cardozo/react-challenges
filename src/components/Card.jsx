// Emotion setup
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// Styles
const cardStyles = css`
  height: 85vh;
  font-size: 2rem;
  color: #3a3a3a;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Card = (props) => {
  return <div css={cardStyles}>{props.children}</div>;
};

export default Card;
