import * as React from "react";

const RemoteButton = React.lazy(() => import('first_app/RemoteButton'))

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <React.Suspense fallback={<div>Loading remote component...</div>}>
        <RemoteButton />
      </React.Suspense>
    </div>
  )
}

export default App