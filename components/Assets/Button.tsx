import styled from "styled-components";

export const Button = styled.button`
  align-items: center;
  background-color: #3056de;
  color: #fff;
  border: none;
  border-radius: 4px;
  box-shadow: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 160px;
  height: 48px;
  font-size: 18px;
  font-weight: 600;
  transition: var(--transition-ease);

  &:hover,
  &:focus {
    box-shadow: var(--shadow);
  }

  &:disabled {
    cursor: default;
    opacity: 0.4;
  }
`;
