import { TouchableOpacity, StyleSheet } from "react-native"
import Texto from "./Texto"

export default function Botao({ texto, style, onPress }) {
    return <TouchableOpacity style={[estilos.botao, style]} onPress={onPress}>
        <Texto style={estilos.textoBotao}>{texto}</Texto>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao: {
        textAlign: "center",
        lineHeight: 26,
        fontSize: 16,
        fontWeight: "bold",
        color: "#ffffff"
    }
})