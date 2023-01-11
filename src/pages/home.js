import paths from "../utils/paths";

function Home() {
  return (
    <div>
      Home Page
      <div>
        login :<a href={paths.login}> login</a>' 'fila:
        <a href={paths.line}> fila</a>
      </div>
    </div>
  );
}

export default Home;
