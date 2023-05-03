import './Instructions.scss';
import { Link } from 'react-router-dom'

function Instructions() {
    return (
        <section className="instructions">
            <h2>How to Play:</h2>
            <div className='instructions__all'>
                <div className='instructions__individual'>
                    <p>A random song will play for only 5 seconds.</p>
                </div>
                <div className='instructions__individual'>
                    <p>Guess the song with only the given play time.</p>
                </div>
                <div className='instructions__individual'>
                    <p>If you get it correct, you win!</p>
                </div>
            </div>
            <Link to="/sonicwave">
                <button>START</button>
            </Link>
        </section>
    );
}

export default Instructions;