
function App() {
  const user = window.Telegram.WebApp.initDataUnsafe.user;

  console.log({user});
  return (
    <>
      <h1>Hello</h1>
    </>
  ) 
}

export default App
