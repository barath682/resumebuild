import React from "react";
import "./../styles/Modal.css";

function PreviewModal({ sections, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Resume Preview</h2>
        {sections.map((section) => (
          <div key={section.id} className="preview-section">
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </div>
        ))}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PreviewModal;
