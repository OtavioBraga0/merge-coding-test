import styled from "styled-components";
import { laptop, large_laptop, tablet } from "../../shared/media_queries";

export const Main = styled.main`
  display: flex;
  align-items: center;

  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
`;

export const List = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding-top: 4rem;

  justify-items: center;

  @media screen and (min-width: ${tablet}px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: ${laptop}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: ${large_laptop}px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const Search = styled.div`
  display: flex;

  gap: 1.5rem;

  & > input {
    height: 3rem;
    width: 25rem;

    border-radius: 0.5rem;

    padding: 0 0.5rem;
  }

  & > select {
    height: 3rem;
    width: 10rem;
    border-radius: 0.5rem;
    padding: 0 0.5rem;
  }
`;
