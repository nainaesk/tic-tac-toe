export default function Log({ logs }) {
  return (
    <ol id="log">
      {logs &&
        logs.map((log, index) => (
          <li key={"log" + index}>
            {log.player} selected {log.square.row + 1},{log.square.col + 1}
          </li>
        ))}
    </ol>
  );
}
