const App = () =>{
    {
        return React.createElement(
          "h1",
          { style: { color: "red" } },
          "Hello world"
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(React.createElement(App))


