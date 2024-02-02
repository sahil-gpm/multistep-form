//adding the react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from "./Intro/Introduction";
import Form from "./Multistepform/Form";
import { Toaster } from "react-hot-toast";
import Prof from "./Multistepform/Prof";

const App = () => {
  return (
    <div className="App bg-primary text-secondary h-[100vh] overflow-x-hidden pb-10">
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        containerStyle={{
          color:"#1c1c1c"
        }}
        toastOptions={{
          iconTheme: {
            primary: "#1c1c1c",
          },
        }}
      />

      <BrowserRouter>
        <Routes>
          {/* the home component  */}
          <Route path="/" Component={Introduction} />
          <Route path="/form-page" Component={Form} />
          <Route path="/current-acc" Component={Prof} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
