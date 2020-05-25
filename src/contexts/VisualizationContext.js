import React from 'react';

const VisualizationContext = React.createContext();

export const VisualizationProvider = VisualizationContext.Provider;
export const VisualizationConsumer = VisualizationContext.Consumer;

export default VisualizationContext;
