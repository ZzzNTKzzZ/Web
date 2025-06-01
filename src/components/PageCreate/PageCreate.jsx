import { DndContext } from "@dnd-kit/core";
import styles from "./PageCreate.module.css";
import { useState } from "react";
import Droppable from "../Dnd/Droppable/Dropable";
import DraggAble from "../Dnd/DraggAble/DraggAble"
export default function PageCreate() {
 const [parent, setParent] = useState(null);
  const draggable = (
    <DraggAble id="draggable">
      a
    </DraggAble>
  );

  return (
    <div className={styles.pageCreate}>
    <DndContext onDragEnd={handleDragEnd}>
      {!parent ? draggable : null}
      <Droppable id="droppable">
        {/* {parent === "droppable" ? draggable : 'Drop here'} */}
      </Droppable>
    </DndContext>

    </div>
  );

  function handleDragEnd({over}) {
    setParent(over ? over.id : null);
  }
}
