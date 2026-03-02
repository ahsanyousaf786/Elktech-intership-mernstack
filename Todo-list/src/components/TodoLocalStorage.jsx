// varaible for local storage key
    const todokey = "todoList";

  const getLocalStorageTodoData = () => {
    try {
        const storedTask = localStorage.getItem("todoList");
        if (storedTask) {
            const parsed = JSON.parse(storedTask);
            return Array.isArray(parsed) ? parsed : [];
        }
        return [];
    } catch (error) {
        console.error("Error reading localStorage:", error);
        return [];
    }
};

    const setLocalStorageTodoData = (task) => {

          return localStorage.setItem(todokey, JSON.stringify(task));
    }

    export {setLocalStorageTodoData, getLocalStorageTodoData}