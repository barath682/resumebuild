import React, { useState, useEffect } from "react";
import Section from "./Section";
import PreviewModal from "./PreviewModal";
import "./../styles/ResumeBuilder.css";

function ResumeBuilder() {
  const [sections, setSections] = useState(() => {
    const savedSections = localStorage.getItem("resumeSections");
    return savedSections ? JSON.parse(savedSections) : [];
  });
  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("resumeSections", JSON.stringify(sections));
  }, [sections]);

  const addSection = () => {
    setSections([
      ...sections,
      { id: Date.now(), title: "New Section", content: "" },
    ]);
  };

  const updateSection = (id, key, value) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, [key]: value } : section
      )
    );
  };

  const deleteSection = (id) => {
    setSections(sections.filter((section) => section.id !== id));
  };

  const reorderSections = (dragIndex, hoverIndex) => {
    const updatedSections = [...sections];
    const [draggedItem] = updatedSections.splice(dragIndex, 1);
    updatedSections.splice(hoverIndex, 0, draggedItem);
    setSections(updatedSections);
  };

  return (
    <div className="resume-builder">
      <div className="controls">
        <button onClick={addSection}>Add Section</button>
        <button onClick={() => setPreviewMode(true)}>Preview</button>
      </div>
      <div className="sections">
        {sections.map((section, index) => (
          <Section
            key={section.id}
            id={section.id}
            index={index}
            title={section.title}
            content={section.content}
            onUpdate={updateSection}
            onDelete={deleteSection}
            onReorder={reorderSections}
          />
        ))}
      </div>
      {previewMode && (
        <PreviewModal sections={sections} onClose={() => setPreviewMode(false)} />
      )}
    </div>
  );
}

export default ResumeBuilder;
