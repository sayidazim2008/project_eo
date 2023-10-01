import {useForm} from 'react-hook-form'

export default function FormApp() {
    const {register, handleSubmit} = useForm()
    const onSubmit = ({data}) => {
        
    }

    return (
        <div className='form_class'>
            <form>
            </form>
        </div>
    )
}

