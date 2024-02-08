function List({ itens }) {
    return (
        <div>
            <h1>Lista de Coisas</h1>
            {itens.length > 0 ? (

                itens.map((element, index) => <p key={index}>{element}</p>)

            )
            :(
               <div>nada Encontrado na lista</div>
            )}

        </div>

    )
}

export default List