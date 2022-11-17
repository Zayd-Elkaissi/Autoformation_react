function Task(){

    const [tasks, setTasks] = React.useState([]);

    React.useEffect(() => {
      axios.get("http://127.0.0.1:8000/api/task").then((res) => {
        setTasks(res.data);
      });
    }, []);

    return (
        <div>
        <div>{tasks.map(task =>
        <p>{task.name}</p>
        
        )}
        </div>
    </div>
        );
}