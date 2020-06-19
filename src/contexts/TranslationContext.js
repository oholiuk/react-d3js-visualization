import React from 'react';

const TranslationContext = React.createContext({ lang: 'fi', defaultLanguage: 'fi', data: [] });

export const TranslationProvider = TranslationContext.Provider;
export const TranslationConsumer = TranslationContext.Consumer;

export default TranslationContext;
