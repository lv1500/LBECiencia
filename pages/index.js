import Menu from '../Components/Menu';
import Home from '../Components/Home';
import Footer from '../Components/Footer';

function HomePage() {
    return (
        <div>
        
            <header>
                <Menu />

            </header>

            <main>
                <Home />
            
            </main>

            <footer>
                <Footer />

            </footer>
        
        </div>
    );
}

export default HomePage
