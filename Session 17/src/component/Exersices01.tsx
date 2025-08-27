import { useEffect, useState } from "react";

export default function Exersices01() {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    setName("Nguyen Van A");
  }, []);
  return (
    <div>
      <h2>Ho va ten: {name}</h2>
    </div>
  );
}