import ExampleTodos from "../components/ExampleTodos";

const WelcomePage = () => {
  const todos = [
    "Buy gifts",
    "To make an appointment with a doctor",
    "Go to english",
  ];
  return (
    <div className="welcome-page">
      <div>
        <h1>Welcome to Todo app!</h1>
        <p>
          Here, you can manage your tasks, organize your life, and achieve your
          goals. This app is designed to help you become more productive and
          efficient.
        </p>
        <p>
          Don't postpone what can be done right now! Start using our Todo app
          and take control of your time.
        </p>
      </div>
      <div>
        {todos.map((title, index) => (
          <ExampleTodos key={index} title={title} />
        ))}
      </div>
    </div>
  );
};

export default WelcomePage;
