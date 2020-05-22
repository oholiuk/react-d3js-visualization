import React from 'react';

const GoogleSheetsContext = React.createContext();

export const GoogleSheetsProvider = GoogleSheetsContext.Provider;
export const GoogleSheetsConsumer = GoogleSheetsContext.Consumer;

export default GoogleSheetsContext;
