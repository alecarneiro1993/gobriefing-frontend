import React, { Suspense } from "react";

import { LoadingSpinner } from "custom_modules";

import AppRouter from "./components/app_router";

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AppRouter />
    </Suspense>
  );
}

export default App;
