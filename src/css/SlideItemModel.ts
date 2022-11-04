import styled from "styled-components";

interface ThemeProps {
  teacherBackground: string;
}

export const SlideItemModel = styled.div<{theme: ThemeProps}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  
  text-align: center;
  
  padding: 0.4rem;
  
  outline: 1px solid var(--border-cell);
  border-radius: 5px;

  color: #000;  
  background-color: ${props => props.theme.teacherBackground};
  

  box-shadow: 0px 0px 1px 1px var(--shadow);

  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  font-weight: 300;

  transition: all .5s;

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
    }
  }
`

SlideItemModel.defaultProps = {
  theme: {
    teacherBackground: "var(--background-cell)"
  }
}