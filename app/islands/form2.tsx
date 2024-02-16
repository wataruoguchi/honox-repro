import { useState } from "hono/jsx";

export default function Form2({ hasLabel }: { hasLabel: boolean }) {
  const [str, setStr] = useState("");
  const onChange = (e: Event) => setStr((e.target as HTMLInputElement).value);
  const id = `input-text-${hasLabel ? "with" : "without"}-label-2`;
  return (
    <form>
      <div>
        {hasLabel && <label for={id}>label</label>}
        <input id={id} type="text" onChange={onChange} />
      </div>
      <p>
        Not sibling{hasLabel && ", has label"}: {str}
      </p>
    </form>
  );
}
