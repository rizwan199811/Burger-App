import logo from './logo.svg';
import './App.css';
import Layout from './component/Layout/Layout'
import BurgerBuilder from './container/Burger Builder/BurgerBuilder'
function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder>
        </BurgerBuilder>
      </Layout>
    </div>
  );
}

export default App;
