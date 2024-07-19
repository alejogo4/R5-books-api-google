module.exports = {
    persistStore: jest.fn().mockReturnValue({
      persist: jest.fn(),
      purge: jest.fn(),
      flush: jest.fn(),
      pause: jest.fn(),
      persistStore: jest.fn(),
      dispatch: jest.fn(),
      getState: jest.fn(() => ({
        version: 1,
        rehydrated: true,
      })),
      replaceReducer: jest.fn(),
      subscribe: jest.fn(),
    }),
    persistReducer: jest.fn().mockImplementation((config, reducers) => reducers),
    PersistGate: ({ children }: { children: React.ReactNode }) => children,
  };
  
  export {};
  