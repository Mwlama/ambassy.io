'use client';

import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  overflow: auto;
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 80px; /* leave space for floating button */

  &::-webkit-scrollbar {
    width: 7px;
    background: #00000038;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgb(146, 0, 83);
  }
`;

const ScrollButton = styled.button<{ visible: boolean }>`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 9999;
  background-color: #ffeb3b;
  color: red;
  border: 1px solid red;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
`;

export default function ScrollToTopExample() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);  // Track if the component is mounted on the client-side

  useEffect(() => {
    // This will run only on the client-side after mount
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only attach scroll listener if we're on the client-side
    if (isClient) {
      const container = scrollRef.current;
      if (!container) return;

      const onScroll = () => {
        setVisible(container.scrollTop > 100);
      };

      container.addEventListener('scroll', onScroll);
      return () => container.removeEventListener('scroll', onScroll);
    }
  }, [isClient]);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isClient) {
    return null;  // Don't render the component during SSR
  }

  return (
    <>
      <Wrapper ref={scrollRef}>
        <h1>Scroll Container</h1>
        <p>React makes it painless to create interactive UIs...</p>
        <p>Keep scrolling to test the button visibility.</p>
        {Array.from({ length: 50 }, (_, i) => (
          <p key={i}>Line {i + 1}: This is some content...</p>
        ))}
      </Wrapper>

      {/* Back to Top Button */}
      <ScrollButton onClick={scrollToTop} visible={visible}>
        ↑ Top
      </ScrollButton>
    </>
  );
}
