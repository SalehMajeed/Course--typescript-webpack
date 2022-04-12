import './styles.css'
import IMAGE from './react.png'
import LOGO from './logo.svg'
import ClickCounter from './ClickCounter'

export const App = () => {
    return <>
        <ClickCounter />
        {process.env.name}
        <h1>Typescript webpack demo - {process.env.NODE_ENV}</h1>
        <img src={IMAGE} alt='React' width='300' height='200' />
        <img src={LOGO} alt='React' width='300' />
    </>
}