import React from "react";
import styled from "styled-components";
import Cards from "./components/Cards";

function App() {
  const MyContain = styled.section`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <MyContain>
      <Cards
        fullName="John Doe"
        username="@realjohndoe"
        tweets="Why do they call it 'debugging' when it feels more like 'wildly
          guessing and hoping for the best'?"
        hashtag1="programming"
        hashtag2="#coding"
        hashtag3="#debugging"
      />
    </MyContain>
  );
}

export default App;
