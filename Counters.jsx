import { useState } from "react";

function Counter() {
const [count, setCount] = useState(0);

return (
<div style={{ textAlign: "center", marginTop: "50px" }}>
<h2>Counter: {count}</h2>

<button onClick={() => setCount(count + 1)}>

24

Increase
</button>
</div>
);
}
export default Counter;
