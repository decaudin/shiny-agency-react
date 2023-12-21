import { render as rtlRender } from '@testing-library/react'
import { ThemeProvider, SurveyProvider } from '../../utils/context'
import { MemoryRouter } from 'react-router-dom'

export const render = (ui, options) => {
    const Wrapper = ({ children }) => {
        return (
        <MemoryRouter {...options}>
            <ThemeProvider>
                <SurveyProvider>{children}</SurveyProvider>
            </ThemeProvider>
        </MemoryRouter>
        )
    }
    rtlRender(ui, { wrapper: Wrapper })
}