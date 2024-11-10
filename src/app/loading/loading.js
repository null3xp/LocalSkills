import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Define global styles for keyframes and other CSS
const GlobalStyle = createGlobalStyle`
  @keyframes move-h {
    0% { top: 0; opacity: 0; }
    25% { opacity: 1; }
    50% { top: 30%; opacity: 1; }
    75% { opacity: 1; }
    100% { top: 100%; opacity: 0; }
  }

  @keyframes move-v {
    0% { left: 0; opacity: 0; }
    25% { opacity: 1; }
    50% { left: 45%; opacity: 1; }
    75% { opacity: 1; }
    100% { left: 100%; opacity: 0; }
  }

  @keyframes effect {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }

  @keyframes rot {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(180deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes scale {
    0% { scale: 1; }
    50% { scale: 1.9; }
    100% { scale: 1; }
  }

  @keyframes height {
    0% { bottom: 0%; left: 0%; height: 0px; }
    25% { height: 90px; }
    50% { bottom: 100%; left: 100%; height: 90px; }
    75% { height: 0px; }
    100% { bottom: 0%; left: 0%; height: 0px; }
  }

  @keyframes width {
    0% { left: 0%; width: 0px; }
    50% { left: 100%; width: 90px; }
    100% { left: 0%; width: 0px; }
  }
`;

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state; replace with real data fetching or authentication check
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Set loading state to false after 3 seconds (simulate page loading)
  }, []);

  if (!loading) {
    return null; // If loading is done, hide the loading screen
  }

  return (
    <>
      <GlobalStyle />
      <LoadingContainer>
        <LoadingContent>
          <LoadingAnimation>
            <div className="loading-wide">
              <div className="l1 color"></div>
              <div className="l2 color"></div>
              <div className="e1 color animation-effect-light"></div>
              <div className="e2 color animation-effect-light-d"></div>
              <div className="e3 animation-effect-rot">X</div>
              <div className="e4 color animation-effect-light"></div>
              <div className="e5 color animation-effect-light-d"></div>
              <div className="e6 animation-effect-scale">*</div>
              <div className="e7 color"></div>
              <div className="e8 color"></div>
            </div>
          </LoadingAnimation>
          <LoadingText>Hold on, we're loading the page for you...</LoadingText>
        </LoadingContent>
      </LoadingContainer>
    </>
  );
};

// Full-page container for loading screen
const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 998; // ensures it is above other content
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`;

// Container for the animation and text
const LoadingContent = styled.div`
  text-align: center;
`;

// The loading animation container
const LoadingAnimation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  .loading-wide {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .color {
    background-color: #3395ff;
  }

  .l1 {
    width: 15px;
    height: 65px;
    position: absolute;
    animation: move-h 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
  }

  .l2 {
    width: 15px;
    height: 60px;
    position: absolute;
    transform: rotate(90deg);
    animation: move-v 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
  }

  .animation-effect-light {
    animation: effect 0.2s 0.1s infinite linear;
  }

  .animation-effect-light-d {
    animation: effect 0.3s 0.2s infinite linear;
  }

  .animation-effect-rot {
    animation: rot 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
  }

  .animation-effect-scale {
    animation: scale 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
  }

  .e1 {
    width: 1px;
    height: 40px;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 8%;
  }

  .e2 {
    width: 60px;
    height: 1px;
    opacity: 0.8;
    position: absolute;
    top: 8%;
    left: 0;
  }

  .e3 {
    position: absolute;
    top: 10%;
    left: 12%;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 900;
    font-size: 18px;
    color: #3395ff;
  }

  .e4 {
    width: 1px;
    height: 40px;
    opacity: 0.3;
    position: absolute;
    top: 90%;
    right: 10%;
  }

  .e5 {
    width: 40px;
    height: 1px;
    opacity: 0.3;
    position: absolute;
    top: 100%;
    right: 0;
  }

  .e6 {
    position: absolute;
    top: 100%;
    right: 0;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 32px;
    color: #3395ff;
  }

  .e7 {
    width: 1px;
    height: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: rotate(45deg);
    animation: height 1s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
  }

  .e8 {
    width: 20px;
    height: 1px;
    position: absolute;
    bottom: 50%;
    left: 0;
    animation: width 1.5s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
  }
`;

// Text below the loading animation
const LoadingText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #3395ff;
  margin-top: 20px;
`;

export default Loading;