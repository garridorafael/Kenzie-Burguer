import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: var(--color-grey-200);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  .cartContainer {
    display: flex;
    gap: 12px;
    align-items: center;
    position: relative;
    width: 390px;

    input{
        width: 365px;
    }

    button {
      border: none;
      background-color: var(--color-color-primary);
      border-radius: 9px;
      width: 50px;
      height: 37px;
      position: absolute;
      top: 6.5px;
      right: 6px;
      align-items: center;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .inputContainer{
    position: relative;
  }

  .cart {
    position: relative;
    &:hover {
      cursor: pointer;
    }

    span {
      background-color: var(--color-color-primary);
      font-size: 14px;
      color: var(--color-grey-200);
      font-weight: 700;
      padding: 2px 3px;
      border-radius: 7px;
      position: absolute;
      top: -10px;
      right: -2px;
    }
  }

  .modal {
    display: flex;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: #fefefe;
    margin: auto;
    border: 1px solid #888;
    border-radius: 8px;
    width: 500px;

    ul {
      overflow-y: auto;
      height: 200px;

      li {
        display: flex;
        padding-left: 18px;
        padding-right: 18px;
        margin-top: 12px;
      }

      .productImage {
        height: 55px;
        width: 55px;
      }

      .cartEmpty {
        font-weight: 700;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 200px;
      }

      .productInfo {
        display: flex;
        width: 350px;
        justify-content: space-between;
        margin-left: 12px;

        span{
            padding: 0 8px;
        }

        h4 {
          font-size: 1.125rem;
          font-weight: 700;
        }

        button{
            border: none;
            padding: 2px 6px;
            border-radius: 3px;
        }

        .buttonRemove {
          border: none;
          background: none;
          width: 12px;
          height: 14px;
          margin-left: 30px;

          &:hover {
            cursor: pointer;
          }
        }
      }

      .cardImage {
        background-color: var(--color-grey-100);
        border-radius: 5px;
        width: 82px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .modalHeader {
    background-color: var(--color-color-primary);
    padding: 16px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    h3 {
      color: var(--color-grey-200);
    }
  }

  footer {
    padding-left: 18px;
    padding-right: 18px;
  }

  .footerContainer {
    display: flex;
    justify-content: space-between;
    border-top: 2px solid var(--color-grey-100);
    padding: 10px 0;
    margin-top: 12px;

    p {
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      color: var(--color-grey-600);
    }

    span {
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      color: var(--color-grey-300);
    }
  }

  .removeButton {
    width: 100%;
    height: 50px;
    margin-bottom: 12px;
    border: none;
    font-weight: 600;
    font-size: 16px;
    color: var(--color-grey-300);
    border-radius: 8px;
    background-color: var(--color-grey-100);

    &:hover {
      cursor: pointer;
    }
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 25px;
    font-weight: 400;
    cursor: pointer;
    align-self: center;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  @media (max-width: 582px) {
    height: 105px;

    .cart{
        position: absolute;
        top: -30px;
        right: -3px;
    }

    .cartContainer{
        margin-left: 5%;

        button{
            right: 6px;
        }
    }

    .inputContainer{
        input{
            width: 330px;
        }
    }
  }
`;

export const StyledCart = styled.img`
  width: 30px;
  height: 30px;
`;

export const StyledContainerHeader = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;

  img {
    object-fit: contain;
  }

  input {
    border: 2px solid var(--color-grey-100);
    width: clamp(250px, 100%, 350px);
    height: 50px;
    border-radius: 8px;
    padding-left: 10px;
    font-size: 1rem;

    &::placeholder {
      color: var(--color-grey-100);
      line-height: 19px;
      font-size: 1rem;
    }
  }
`;
