import React from "react";
import "./../styles/Section.css";

function Section({ id, index, title, content, onUpdate, onDelete, onReorder }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("sectionIndex", index);
  };

  const handleDrop = (e) => {
    const draggedIndex = e.dataTransfer.getData("sectionIndex");
    onReorder(parseInt(draggedIndex, 10), index);
    e.preventDefault();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="section"
      draggable
      onDragStart={handleDragStart}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => onUpdate(id, "title", e.target.value)}
        placeholder="Section Title"
      />
      <textarea
        value={content}
        onChange={(e) => onUpdate(id, "content", e.target.value)}
        placeholder="Enter content here..."
      ></textarea>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default Section;
