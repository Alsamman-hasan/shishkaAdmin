const executeWithDelay = (f: () => void) => {
  const syntheticDelay = Math.floor((0.1 + Math.random()) * 1000);
  setTimeout(f, syntheticDelay);
};

export const mockResponse = <T>(responseBody: T): Promise<T> =>
  new Promise((resolve) => executeWithDelay(() => resolve(responseBody)));

// const response: IResponse<IUserCartItems> = yield mockResponse({
//   data: mockData.cards.getAllBurnedCards,
// }).then((value) => value);
