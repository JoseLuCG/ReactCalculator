function History({results}) {
    const liArray = results.map(
        item => <p>({item.firstNumber} {item.operator} {item.secondNumber}) El Resultado es: {item.result}</p>
    )
    return (
        <>
            {liArray}
        </>
    )
}
export default History;