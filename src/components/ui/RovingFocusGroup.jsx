import { createContext, useContext, useState, useRef, useEffect } from 'react';

const RovingFocusGroupContext = createContext(null);

export function RovingFocusGroupProvider({
  children,
  orientation = 'horizontal',
  loop = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsRef = useRef([]);

  const registerItem = (element) => {
    if (element && !itemsRef.current.includes(element)) {
      itemsRef.current.push(element);
    }
  };

  const unregisterItem = (element) => {
    itemsRef.current = itemsRef.current.filter((item) => item !== element);
  };

  const focusItem = (index) => {
    if (itemsRef.current[index]) {
      itemsRef.current[index].focus();
      setCurrentIndex(index);
    }
  };

  const handleKeyDown = (e) => {
    const isHorizontal = orientation === 'horizontal';
    const isVertical = orientation === 'vertical';

    let nextIndex = currentIndex;

    if (isHorizontal) {
      if (e.key === 'ArrowRight') {
        nextIndex = loop
          ? (currentIndex + 1) % itemsRef.current.length
          : Math.min(currentIndex + 1, itemsRef.current.length - 1);
      } else if (e.key === 'ArrowLeft') {
        nextIndex = loop
          ? (currentIndex - 1 + itemsRef.current.length) % itemsRef.current.length
          : Math.max(currentIndex - 1, 0);
      }
    }

    if (isVertical) {
      if (e.key === 'ArrowDown') {
        nextIndex = loop
          ? (currentIndex + 1) % itemsRef.current.length
          : Math.min(currentIndex + 1, itemsRef.current.length - 1);
      } else if (e.key === 'ArrowUp') {
        nextIndex = loop
          ? (currentIndex - 1 + itemsRef.current.length) % itemsRef.current.length
          : Math.max(currentIndex - 1, 0);
      }
    }

    if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = itemsRef.current.length - 1;
    }

    if (nextIndex !== currentIndex) {
      e.preventDefault();
      focusItem(nextIndex);
    }
  };

  return (
    <RovingFocusGroupContext.Provider
      value={{
        currentIndex,
        registerItem,
        unregisterItem,
        focusItem,
        handleKeyDown,
      }}
    >
      {children}
    </RovingFocusGroupContext.Provider>
  );
}

export function useRovingFocusGroup() {
  const context = useContext(RovingFocusGroupContext);
  if (!context) {
    throw new Error(
      'useRovingFocusGroup must be used within a RovingFocusGroupProvider'
    );
  }
  return context;
}

export function RovingFocusGroupItem({
  children,
  index,
  className = '',
}) {
  const { currentIndex, registerItem, unregisterItem, focusItem, handleKeyDown } =
    useRovingFocusGroup();
  const itemRef = useRef(null);

  useEffect(() => {
    if (itemRef.current) {
      registerItem(itemRef.current);
    }
    return () => {
      if (itemRef.current) {
        unregisterItem(itemRef.current);
      }
    };
  }, [registerItem, unregisterItem]);

  const isFocused = currentIndex === index;

  return (
    <div
      ref={itemRef}
      tabIndex={isFocused ? 0 : -1}
      onKeyDown={handleKeyDown}
      onFocus={() => focusItem(index)}
      className={className}
    >
      {children}
    </div>
  );
}
