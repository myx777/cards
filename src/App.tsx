import Card from "./components/Card";

function App() {
  const cardProps = {
    h: "картинка",
    text: "хамелионишка",
    buttonlink: {
      text: "Go to Google",
      link: "https://www.google.com/search?q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0+%D1%85%D0%B0%D0%BC%D0%B5%D0%BB%D0%B8%D0%BE%D0%BD%D0%B0&ie=UTF-8#vhid=RGPUWJAiwN3BxM&vssid=l",
    },
  };
  const cardProps2 = {
    h: "кар",
    text: "хамел",
    buttonlink: {
      text: "Go te",
      link: "https://www.google.com/search?q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0+%D1%85%D0%B0%D0%BC%D0%B5%D0%BB%D0%B8%D0%BE%D0%BD%D0%B0&ie=UTF-8#vhid=RGPUWJAiwN3BxM&vssid=l",
    },
  };

  return (
    <>
      <Card {...cardProps2}>
        <img
          src="https://panteric.ru/files/gallery/5519/medium/qfbz5bqhuqq_1581615106.jpg"
          alt="..."
        />
      </Card>
      <Card {...cardProps}></Card>
    </>
  );
}

export default App;
