export default function ContextMenu({ position, setContextMenu }) {
  const style = {
    position: "fixed",
    top: position.y,
    left: position.x,
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: 4,
    padding: "4px 0",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    zIndex: 1000,
    minWidth: 120,
  };

  return (
    <ul style={style}>
      <li
        style={{ padding: "8px 12px", cursor: "pointer" }}
        onClick={() => {
          setContextMenu({ ...position, visible: false });
        }}
      >
        Edit
      </li>
      <li
        style={{ padding: "8px 12px", cursor: "pointer" }}
        onClick={() => {
          setContextMenu({ ...position, visible: false });
        }}
      >
        Delete
      </li>
    </ul>
  );
}
