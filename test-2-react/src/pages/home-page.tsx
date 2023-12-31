import { HomeForm } from "../components/form/home-form"
import { useHomeForm } from "../components/form/use-home-form"

export function HomePage() {
    const {onSubmit, onCancel, FormStatus} = useHomeForm()

    return (
        <div>
            <HomeForm onSubmit={onSubmit} onCancel={onCancel} />
            {FormStatus()}
        </div>
       
    )
}