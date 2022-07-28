

const CREATE = "todo/CREATE" as const;
const TOGGLE = "todo/TOGGLE" as const;
const DELETE = "todo/DELETE" as const;
const INPUT_CHANGE = "todo/INPUT_CHANGE" as const;

export type Todo = {
    id: number;
    text: string;
    isDone: boolean;
}

export type TodoState = {
    inputText: string;
    todos: Todo[];
}
const initalState = {
    inputText: "",
    todos: [],
}

export const create = (todo: Todo) => ({ type: CREATE, todo: todo });
export const toggle = (id: number) => ({ type: TOGGLE, id: id });
export const deleted = (id: number) => ({ type: DELETE, id: id });
export const inputChange = (text: string) => ({ type: INPUT_CHANGE, text: text})



type TodoAction =
    | ReturnType<typeof create>
    | ReturnType<typeof toggle>
    | ReturnType<typeof deleted>
    | ReturnType<typeof inputChange>;


export default function todo(state: TodoState = initalState, action: TodoAction): TodoState {
    switch (action.type) {
        case 'todo/CREATE':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.todo
                ]
            }
        case 'todo/TOGGLE':
            return {
                ...state,
                todos: state.todos.map(todo=>todo.id === action.id ? {...todo, isDone: !todo.isDone} : todo),
            }
        case 'todo/DELETE':
            return {
                ...state,
                todos: state.todos.filter(todo=>todo.id !== action.id)
            }
        case 'todo/INPUT_CHANGE':
            return {
                ...state,
                inputText: action.text
            }
        default:
            return state;
    }
}
