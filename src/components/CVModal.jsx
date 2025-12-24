import React from 'react';

const CVModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="cv-modal-overlay" onClick={onClose}>
            <div className="cv-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="cv-modal-header">
                    <h2 className="text-xl font-bold">Shahbaz's CV</h2>
                    <button className="close-btn" onClick={onClose}>
                        &times;
                    </button>
                </div>

                <div className="cv-modal-body">
                    <iframe
                        src="/CV/Shahbaz's CV.pdf#toolbar=0"
                        title="CV Preview"
                        width="100%"
                        height="100%"
                        className="rounded-lg border-none"
                    ></iframe>
                </div>

                <div className="cv-modal-footer">
                    <a
                        href="/CV/Shahbaz's CV.pdf"
                        download="Shahbaz_CV.pdf"
                        className="cv-download-btn"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CVModal;
