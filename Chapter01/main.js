
const  Hello = () =>{
    return <div>Hello world</div>;
}

const App = () => {
    return (
      <React.Fragment>
        <h1>This my fokira react application</h1>
        <Hello />
      </React.Fragment>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)