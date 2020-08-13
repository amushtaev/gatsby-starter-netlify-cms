import React from 'react';

const initialContext = {
  active: false,
  animate: true,
  gap: 'none',
  onPanelChange: () => {},
};

export const AccordionContext = React.createContext(initialContext);
