import { useEffect } from 'react';
import Modal from 'react-modal';

interface StatusModalPropsType {
    closeModal: () => void;
    isOpen: boolean;
    title: string;
}

export function StatusModal({ closeModal, isOpen, title }: StatusModalPropsType) {

    useEffect(() => {
        window.onpopstate = () => {
            closeModal()
        }

        return () => {
            window.onpopstate = null
        }
    }, [])

    return (
        <Modal
            onRequestClose={closeModal} 
            isOpen={isOpen}
            style={{ 
                content: {  top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)'
                } 
            }}
        >
            <p>{title}</p>
        </Modal>
    )
}