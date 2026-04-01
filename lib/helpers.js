import * as React from 'react';

export function formatDate(date) {
  if (!date) return "—";
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(date));
}

export function formatTime(date) {
  if (!date) return "—";
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).format(new Date(date));
}

export function formatDuration(startTime, endTime) {
  if (!startTime || !endTime) return "—";
  const diff = Math.round((new Date(endTime).getTime() - new Date(startTime).getTime()) / 60000);
  return `${diff} mins`;
}

export function getStrictContext(name) {
  const Context = React.createContext(undefined);

  const Provider = ({
    value,
    children
  }) => <Context.Provider value={value}>{children}</Context.Provider>;

  const useSafeContext = () => {
    const ctx = React.useContext(Context);
    if (ctx === undefined) {
      throw new Error(`useContext must be used within ${name ?? 'a Provider'}`);
    }
    return ctx;
  };

  return [Provider, useSafeContext];
}