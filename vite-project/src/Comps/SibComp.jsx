import { useState } from "react";
function SibComp() {
  const [text, setText] = useState("Initial text");
  const TextToRedev = () => {
    return setText((text) => (text = `REDEV`));
  };
  return (
    <>
      <p>{`Current text - ${text}`}</p>
      <button onClick={TextToRedev}>Change text to REDEV</button>
    </>
  );
}
export default SibComp;
