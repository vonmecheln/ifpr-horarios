import styled from "styled-components";

// export const Container = styled.main`
//   width: 100vw;
//   height: 100vh;

//   background-color: #134700;
//   color: #fff;

//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;

//   button {
//     font-family: 'Poppins', sans-serif;
//     border: none;
//     outline: none;
//     font-size: 1.5rem;
//     border-radius: .7rem;
//     cursor: pointer;
    
//     width: 12rem;
//     height: 3rem;

//     a {
//       color: black;
//       text-decoration: none;
//       display: block;
//     }
//   }
// `

export const Container = styled.div`
  width: 100%;
  border: 1px solid red;
  height: 200vh;
  display: flex;

  .teste {
    grid-template: repeat(5, 1fr) / 1fr ;
    border: 1px solid green;
    gap: 1rem;
  }
`