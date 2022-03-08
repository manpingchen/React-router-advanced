# React Router Advanced
## Summary
A React SPA web app, implementing:
- React Router v6
- React Lazy Loading
- REST APIs integration from Firebase
- deploy through Firebase Hosting</br></br>
![alt text](https://repository-images.githubusercontent.com/464493539/071a2056-87f4-4a09-b3aa-643dcdd7ba38)

https://react-practice-e3306.firebaseapp.com/quotes</br>

## Features included

### React Router v6 (Upgrading from v5)
https://reactrouter.com/
```javascript
    <Routes>
      <Route path="/" element={<Navigate replace to="/quotes" />} />
      <Route path="quotes">
        <Route index element={<AllQuotes />} />
          <Route path=":quoteId/*" element={<QuoteDetail />}>
            <Route path="comments" element={<Comments />} />
          </Route>
        </Route>
        <Route path="new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
```

### Route-based code splitting: React Lazy Loading 
https://reactjs.org/docs/code-splitting.html
```javascript
<Suspense
  fallback={
    <div className="centered">
      <LoadingSpinner />
     </div>
  }
    >
    <Routes>
      <Route path="/" />
      <Route path="new-quote" element={<NewQuote />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
</Suspense>
```

### custom Hook: useHttp
```javascript
import { useReducer, useCallback } from "react";

function httpReducer(state, action) {
  if (action.type === "SEND") {
    return {
      status: "pending",
      data: null,
      error: null,
    };
  }
  if (action.type === "SUCCESS") {
    return {
      status: "completed",
      data: action.responseData,
      error: null,
    };
  }
  if (action.type === "ERROR") {
    return {
      status: "completed",
      data: null,
      error: action.errorMessage,
    };
  }
  return state;
}

const useHttp = (requestFunction, startingWithPending = false) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startingWithPending ? "pending" : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async (requestData) => {
      dispatch({ type: "SEND" });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: "SUCCESS", responseData });
      } catch (error) {
        dispatch({ type: "ERROR", errorMessage: error.message || "Something went wrong." });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
};

export default useHttp;

```

## Install
Type ```npm install``` to your terminal

## Start
Type ```npm start``` to run the application on your browser

## Build
Type ```npm run build``` to build the application
