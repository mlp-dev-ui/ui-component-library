import { Input as TaskInput } from "../Input";
import { TaskData } from "../../types/types";

type TaskProps = {
  task: TaskData;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
};

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: TaskProps) {
  return (
    <div className="list-item">
      <label htmlFor={`title-${id}`} aria-label={title}>
        <TaskInput
          type="text"
          value={title}
          readOnly={true}
          name="title"
          id={`title-${id}`}
        />
      </label>
    </div>
  );
}
