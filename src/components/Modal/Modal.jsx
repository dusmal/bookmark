import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, content }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleEscapeKey = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscapeKey);
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal" ref={modalRef}>
                <button className="modal__close" onClick={onClose} aria-label="Close modal">
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 6.586L14.293.293l1.414 1.414L9.414 8l6.293 6.293-1.414 1.414L8 9.414l-6.293 6.293-1.414-1.414L6.586 8 .293 1.707 1.707.293 8 6.586z" fill="#9194A1" fillRule="nonzero" />
                    </svg>
                </button>
                <div className="modal__content">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Modal;