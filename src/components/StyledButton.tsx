import styled from "styled-components";

interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  background-color: ${(props) => (props.primary ? "#3B82F6" : "#ffffff")};
  color: ${(props) => (props.primary ? "#ffffff" : "#1F2937")};
  border: 1px solid ${(props) => (props.primary ? "#3B82F6" : "#D1D5DB")};

  padding: ${(props) => {
    switch (props.size) {
      case "small":
        return "0.375rem 0.75rem";
      case "large":
        return "0.75rem 1.5rem";
      default:
        return "0.5rem 1rem";
    }
  }};
  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return "0.875rem";
      case "large":
        return "1.125rem";
      default:
        return "1rem";
    }
  }};

  width: ${(props) => (props.fullWidth ? "100%" : "auto")};

  &:hover {
    background-color: ${(props) => (props.primary ? "#2563EB" : "#F9FAFB")};
    border-color: ${(props) => (props.primary ? "#2563EB" : "#9CA3AF")};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.primary ? "rgba(59, 130, 246, 0.5)" : "rgba(209, 213, 219, 0.5)"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default StyledButton;
