import Card from "./components/Card";

function App() {
  return (
    <>
      <Card
        img="https://picsum.photos/200/300"
        h="lorem ipsum"
        text="lorem ipsum lorem ipsum lorem ipsum"
        buttonlink={{
          text: "Go Somewhere",
          link: "https://www.google.com/search?q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0+%D1%85%D0%B0%D0%BC%D0%B5%D0%BB%D0%B8%D0%BE%D0%BD%D0%B0&ie=UTF-8#vhid=RGPUWJAiwN3BxM&vssid=l",
        }}
      />
      <Card
        h="lorem"
        text="jhjhgjhvjhvjhvm"
        buttonlink={{
          text: "kjbkjvbjkb",
          link: "https://www.google.com/search?q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0+%D1%85%D0%B0%D0%BC%D0%B5%D0%BB%D0%B8%D0%BE%D0%BD%D0%B0&ie=UTF-8#vhid=RGPUWJAiwN3BxM&vssid=l",
        }}
      />
    </>
  );
}

export default App;
