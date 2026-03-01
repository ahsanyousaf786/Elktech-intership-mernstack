// varaible for local storage key
    const todokey = "todoList";

    const getLocalStorageTodoData = () => {
        const storedTask = localStorage.getItem(todokey);
        if(storedTask !== "undefined") { 

            return JSON.parse(storedTask)
        }else {

            return [];
        }
    }


    const setLocalStorageTodoData = (task) => {

          return localStorage.setItem(todokey, JSON.stringify(task));
    }

    export {setLocalStorageTodoData, getLocalStorageTodoData}