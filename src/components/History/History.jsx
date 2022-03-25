function History({results}) {
    const liArray = results.map(
        item => <p class="dataRecord">({item.firstNumber} {item.operator} {item.secondNumber}) El Resultado es: {item.result}</p>
    )
    return (
        <>
            <div class="historial">
                {liArray}
            </div>
        </>
    )
}
export default History;