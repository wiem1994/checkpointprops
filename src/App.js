import "./App.css";
import Apro from "./Profile/Profile";
import "./App.css";
function App() {
    const handleName = (name) => {
        alert(`my name is ${name}`);
    };
    return (
        <div>
            <Apro
                name="Wiem Ben Ameur"
                bio="This is me"
                profession="xxx"
                handleName={handleName}
            >
                <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                    alt="erreur"
                />
            </Apro>
        </div>
    );
}

export default App;
