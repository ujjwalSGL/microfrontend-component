import React, { Suspense } from "react";
const RemoteButton = React.lazy(() => import("component/Button"));

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center text-3xl font-bold text-blue-950 h-screen">
      <h1>Host Application</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteButton variant="outline" size="lg">
          Hello World
        </RemoteButton>
      </Suspense>
    </div>
  );
};

export default App;
