import { Container } from "./style"

const Balance = () => {

    const balance = 100.50
    return (
        <Container>
            <h2>Balance</h2>
            <span>R$<p>{balance.toFixed(2)}</p></span>
        </Container>
    )
}

export default Balance