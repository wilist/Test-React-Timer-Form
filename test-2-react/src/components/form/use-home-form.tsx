import { useHistory } from "react-router"
import { EndpointService } from "../../services/endpoint-service"
import { useModal } from "../modal/use-modal"
import { StatusModal } from "../modal/status-modal"

export const useHomeForm = () => {
    const history = useHistory()
    const {isOpen, openModal, closeModal, title} = useModal()

    return {
        onSubmit: async (values: any) => {
            try {
                const response = await EndpointService().post({ email: values.email })
                openModal(response.ok ? "Success!" : "Error!")
            } catch (e) {
                throw e
            }
        },
        onCancel: () => {
            history.push('/login')
        },
        FormStatus: () => {
            return (
                <StatusModal 
                    isOpen={isOpen} 
                    closeModal={closeModal} 
                    title={title} 
                />
            )
        },
    }
}