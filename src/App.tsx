import Home from "./pages/Home";

declare global {
  interface Window {
    Telegram: any;
  }
}
function App() {
  const user = window.Telegram.WebApp.initDataUnsafe.user;

  console.log({user});
  return (
    <>
      <h1>Hello</h1>
      <Home />
    </>
  ) 
}

export default App
