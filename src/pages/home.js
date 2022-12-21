import paths from "../utils/paths";

function Home() {
  return (
    <div>
      Home Page
      <a href={paths.login}> login</a>
    </div>
  );
}

export default Home;
