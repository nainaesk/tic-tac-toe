import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onNameUpdate,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onNameUpdate(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let playerNameEl = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    playerNameEl = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameEl}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
