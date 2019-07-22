const middlewareLogger = store => next => action => {
  console.log('OG State:', store.getState());
  console.log('Current Action:', action);
  next(action);
  console.log('New Updated State', store.getState());
};

export default middlewareLogger;
