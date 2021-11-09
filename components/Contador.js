const Contador = () => {
    const [contador,setContador]=React.useState(0);

    const aumentar=()=>{
        setContador(contador+1)
    }

    const reducir=()=>{
        setContador(contador-1)
    }
    return (
        <div>
            COntador {contador}
            <hr />
            <button
                onClick={aumentar}
            >Aumentar</button>
            <button
                 onClick={reducir}
            >Disminuir</button>
        </div>
    )
}

