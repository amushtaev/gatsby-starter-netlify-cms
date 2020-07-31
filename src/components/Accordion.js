import React, { Children, useEffect, useState } from 'react';
import { AccordionContext } from './AccordionContext';

const Accordion = (props) => {
  const { activeIndex, children, multiple, animate, gap, className } = props;
  const [activeIndexes, setActiveIndexes] = useState([]);

  useEffect(() => {
    if (activeIndex !== undefined) {
      if (typeof activeIndex === 'number') {
        setActiveIndexes([activeIndex]);
      } else {
        setActiveIndexes(activeIndex);
      }
    }
  }, [activeIndex]);

  const onPanelChange = (index) => {
    let nextActiveIndexes = [...(activeIndexes || [])];

    const nextActiveIndex = nextActiveIndexes.indexOf(index);
    if (nextActiveIndex > -1) {
      nextActiveIndexes.splice(nextActiveIndex, 1);
    } else if (multiple) {
      nextActiveIndexes.push(index);
    } else {
      nextActiveIndexes = [index];
    }

    setActiveIndexes(nextActiveIndexes);
  };

  return (
    <div className={className}>
      {Children.toArray(children)
        .filter((child) => child)
        .map((child, index) => (
          <AccordionContext.Provider
            key={index}
            value={{
              active: activeIndexes.indexOf(index) > -1,
              animate: animate !== undefined ? animate : true,
              onPanelChange: () => onPanelChange(index),
              gap: gap !== undefined ? gap : 'none',
            }}
          >
            {child}
          </AccordionContext.Provider>
        ))}
    </div>
  );
}

export default Accordion;
