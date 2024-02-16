import { useState } from "hono/jsx";

export default function Form({ hasLabel }: { hasLabel: boolean }) {
  const [str, setStr] = useState("");
  const onChange = (e: Event) => setStr((e.target as HTMLInputElement).value);
  const id = `input-text-${hasLabel ? "with" : "without"}-label`;
  return (
    <form>
      <div>
        {hasLabel && <label for={id}>label</label>}
        <input id={id} type="text" onChange={onChange} />
        <p>
          Sibling{hasLabel && ", has label"}: {str}
        </p>
      </div>
    </form>
  );
}
