import { useState } from "react"

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState('')

    const openModal = (title: string) => {
        setIsOpen(true)
        setTitle(title)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return {
        title,
        isOpen,
        openModal,
        closeModal,
    }
}