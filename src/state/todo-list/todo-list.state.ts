export interface TodoItem {
    name: string;
    done: boolean;
}

export type State = Array<TodoItem>;

export const initialState: State = [
    { name: 'clean room', done: false },
    { name: 'make pancakes', done: false },
    { name: 'spend 3 hours on reddit', done: true }
];
