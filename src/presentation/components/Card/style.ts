import styled from "styled-components";
import { large_laptop, large_mobile } from "../../shared/media_queries";

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  border-radius: 5px;
  overflow: hidden;

  width: 15rem;

  & > img {
    border-radius: 5px;
  }

  & > div {
    & > h3 {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  &:hover {
    & > div {
      top: 50%;

      & > h3 {
        text-overflow: unset;
        white-space: normal;
        overflow: auto;
      }
    }
  }

  @media screen and (min-width: ${large_mobile}px) {
    width: 19rem;
  }

  @media screen and (min-width: ${large_laptop}px) {
    &:hover > div {
      top: 60%;
    }
  }
`;

export const Details = styled.div`
  position: absolute;
  top: 85%;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 0;

  padding: 0 1rem;

  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 70%,
    rgba(0, 0, 0, 0) 100%
  );

  transition: background-image 0.2s linear, top 0.3s linear;

  & > p {
    margin-top: 1rem;
  }

  & > * {
    color: white;
  }

  @media screen and (min-width: ${large_mobile}px) {
    top: 89%;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
