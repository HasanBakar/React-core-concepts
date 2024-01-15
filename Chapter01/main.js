const intro = () => {
    return React.createElement('p', {}, "Hello, I am abu Bakar")
}

const App = () =>{
    {
        return React.createElement(
          "h1",
          { style: { color: "cyan" } },
          "Hello world",
          intro()
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(React.createElement(App))


