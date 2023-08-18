import MainRoutes from './routes';

function App() {
  const devMode = process.env.NODE_ENV === 'development';
  return (
    <div className={devMode ? 'debug-screens scroll-smooth' : 'scroll-smooth'}>
      <MainRoutes />
    </div>
  );
}

export default App;
