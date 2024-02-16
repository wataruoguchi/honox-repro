import { css } from "hono/css";
import { createRoute } from "honox/factory";
import Form from "../islands/form";
import Form2 from "../islands/form2";

const className = css`
  font-family: sans-serif;
`;

export default createRoute((c) => {
  const name = c.req.query("name") ?? "Hono";
  return c.render(
    <div class={className}>
      <h1>Hello, {name}!</h1>
      <Form hasLabel={true} />
      <Form hasLabel={false} />
      <Form2 hasLabel={true} />
      <Form2 hasLabel={false} />
    </div>,
    { title: name }
  );
});
