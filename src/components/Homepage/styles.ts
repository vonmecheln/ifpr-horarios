import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  background-color: #134700;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    font-family: 'Poppins', sans-serif;
    border: none;
    outline: none;
    font-size: 1.5rem;
    border-radius: 0.7rem;
    cursor: pointer;

    width: 12rem;
    height: 3rem;

    background-color: #fff;

    a {
      color: black;
      text-decoration: none;
      display: block;
    }
  }
`
