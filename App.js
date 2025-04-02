import './Card.css'

function App() {
    return(
        <div>
            <h1>Słynni informatycy</h1>
            <div className="Card">
                <h2>Alan Turing</h2>
                <img src="images/alan_turing.jpeg" alt="Alan Turing">
                <p>1912 - 1954</p>
                <p>Matematyk</p>
                <p>Anglia</p>
            </div>
            <div className="Card">
                <h2>Niklaus Wirth</h2>
                <img src="images/niklaus_wirth.jpeg" alt="Niklaus Wirth">
                <p>1934 - ?</p>
                <p>Elektronik i informatyk</p>
                <p>Szwajcaria</p>
            </div>
            <div className="Card">
                <h2>Dennis Ritchie</h2>
                <img src="images/dennis_ritchie.jpeg" alt="Dennis Ritchie">
                <p>1941 - 2011</p>
                <p>Matematyk, fizyk i informatyk</p>
                <p>USA</p>
            </div>
        </div>
    );
}

export default App;