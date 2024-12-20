import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type Store = {
  count: number;
  value: string;
  inc: () => void;
};

const useCounterStore = create<Store>()((set) => ({
  count: 1,
  value: "2",
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec() {
    set((state) => ({ count: state.count - 1 }));
  },
}));

function Counter() {
  const { count, inc } = useCounterStore();

  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  );
}

type Props = {};

const ZustandView = (props: Props) => {
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};

export default ZustandView;
