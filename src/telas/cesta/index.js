import { StyleSheet, View, FlatList } from "react-native"
import Topo from "./ComponentesCesta/Topo"
import Detalhes from "./ComponentesCesta/Detalhes"
import Item from "./ComponentesCesta/Item"
import Texto from "../../componentes/Texto"

export default function Cesta({ topo, detalhes, itens }) {
    return <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes} />
                        <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                    </View>
                </>
            }}
        />
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontSize: 20,
        marginTop: 32,
        marginBottom: 8,
        lineHeight: 32,
        fontWeight: "bold"
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})