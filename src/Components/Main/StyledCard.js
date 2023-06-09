import styled from "styled-components";

export const CardProduct = styled.li`
  width: 300px;
  height: 346px;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--color-grey-100);
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    border: 2px solid var(--color-color-primary);

    .addButton {
      background-color: var(--color-color-primary);
      border: 2px solid var(--color-color-primary);
    }

    img {
      transform: scale(1.1);
    }
  }

  .productInfo {
    padding-left: 12px;

    h4 {
      margin-top: 18px;
      margin-bottom: 10px;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 24px;
    }

    span {
      font-size: 0.75rem;
      color: var(--color-grey-300);
      line-height: 16px;
    }

    p {
      font-size: 0.875rem;
      font-weight: 600;
      line-height: 24px;
      color: var(--color-color-primary);
      margin-top: 12px;
      margin-bottom: 16px;
    }

  }

  .cardImage {
    width: 300px;
    height: 150px;
    background-color: var(--color-grey-200);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    border-radius: top 5px;

    img {
      object-fit: contain;
      height: 168px;
    }
  }
`;
export const MainContainer = styled.main`
  display: flex;
  width: 100vw;
  max-width: 1200px;

  ul {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    flex-direction: row;
    gap: 1.875rem;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
