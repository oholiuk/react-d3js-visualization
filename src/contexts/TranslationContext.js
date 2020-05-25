import React from 'react';

const TranslationContext = React.createContext({ lang: 'en', data: [] });

export const TranslationProvider = TranslationContext.Provider;
export const TranslationConsumer = TranslationContext.Consumer;

export default TranslationContext;
