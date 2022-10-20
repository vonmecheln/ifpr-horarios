import styled from "styled-components";

export const SlideItemModel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  
  text-align: center;
  
  padding: 0.4rem;
  
  border: 1px solid var(--border-cell);
  border-radius: 5px;

  color: #000;  
  background-color: var(--background-cell);

  box-shadow: 0px 0px 1px 1px var(--shadow);

  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  font-weight: 300;

  transition: filter .4s;

  gap: 2px;

  &:hover {
    filter: brightness(0.9);
  }
`