import {DateTimePickerElement, FormContainer} from 'react-hook-form-mui/src'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import DateFnsProvider from '../src/DateFnsProvider'
import {action} from '@storybook/addon-actions'
import {SubmitButton} from '../src/Shared'

export default {
    title: 'DateTimePickerElement',
    component: DateTimePickerElement
} as ComponentMeta<typeof DateTimePickerElement>


const Template: ComponentStory<typeof DateTimePickerElement> = (args) => (
    <DateFnsProvider>
        <FormContainer defaultValues={{}} onSuccess={action('submit')}>
            <DateTimePickerElement {...args} />
            <br/>
            <SubmitButton/>
        </FormContainer>
    </DateFnsProvider>
)


export const Basic = Template.bind({})
Basic.args = {
    label: 'Datetime Picker',
    name: 'basic'
}

export const RequiredPicker = Template.bind({})
RequiredPicker.args = {
    label: 'Datetime Picker',
    name: 'required_picker',
    required: true
}

export const RequiredPickerCustom = Template.bind({})
RequiredPickerCustom.args = {
    label: 'Datetime Picker',
    name: 'required_picker_custom',
    required: true,
    validation: {required: 'Custom required message'}
}