import styled from "styled-components";

export const Button = styled.button`
      width: 106px;
      height: 40px;
      border: 2px solid var(--color-grey-400);
      border-radius: 8px;
      background-color: var(--color-grey-400);
      color: var(--color-grey-200);
      font-weight: 600;
      font-size: 0.875rem;

      &:hover {
        cursor: pointer;
        background-color: var(--color-primary-2);
        border: 2px solid var(--color-primary-2);
      }
`;