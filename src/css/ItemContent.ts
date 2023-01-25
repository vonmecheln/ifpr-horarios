import styled from "styled-components";

interface ThemeProps {
  teacherBackground: string;
}

export const ItemContent = styled.div<{theme: ThemeProps}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  
  text-align: center;
  
  padding: 0.4rem;
  margin: 0 0px;
  
  border: 1px solid var(--border-cell);
  border-radius: 5px;
  
  [data-theme="dark"] {
    border: 1px solid var(--ifm-color-black);
  }

  color: var(--text-cell-light);  
  background-color: ${props => props.theme.teacherBackground};

  /* box-shadow: 0px 0px 1px 1px var(--shadow); */

  font-family: 'Poppins', sans-serif;
  font-size: var(--font-size-base);
  font-weight: 300;

  transition: all .3s;

  word-break: break-word;

  a {
    color: white;
  }

  &:hover {
    filter: brightness(0.8);
  }

  @media (min-width: 768px) {
    &:hover {
      filter: brightness(0.8);
      scale: 1.015;
      z-index: 5;
    }
  }
`

ItemContent.defaultProps = {
  theme: {
    teacherBackground: "var(--background-cell)"
  }
}