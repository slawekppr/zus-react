import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

type Store = {
  count: number;
  value: string;
  inc: () => void;
};

const useCounterStore = create<Store>()(
  devtools(
    immer((set) => ({
      count: 1,
      value: "2",
      inc: () =>
        set((state) => {
          state.count++;
        }),
      dec() {
        set((state) => {
          state.count--;
        });
      },
    }))
  )
);

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
