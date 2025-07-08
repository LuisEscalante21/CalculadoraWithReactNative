import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(0);

  const sumar = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    const sumatoria = num1 + num2;
    setResultado(sumatoria);
  };

  const restar = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    const resta = num1 - num2;
    setResultado(resta);
  };

  const multiplicar = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    const producto = num1 * num2;
    setResultado(producto);
  };

  const dividir = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    if (num2 !== 0) {
      const division = num1 / num2;
      setResultado(division);
    } else {
      setResultado("Error: División por cero");
    }
  };

  const limpiarCampos = () => {
    setNumero1("");
    setNumero2("");
    setResultado(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora 1B</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Número 1</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite un número"
          keyboardType="numeric"
          value={numero1}
          onChangeText={(text) => setNumero1(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Número 2</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite un número"
          keyboardType="numeric"
          value={numero2}
          onChangeText={(text) => setNumero2(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={sumar}>
          <Text style={styles.buttonText}>Sumar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={restar}>
          <Text style={styles.buttonText}>Restar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={multiplicar}>
          <Text style={styles.buttonText}>Multiplicar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={dividir}>
          <Text style={styles.buttonText}>Dividir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.clearButton} onPress={limpiarCampos}>
          <Text style={styles.clearButtonText}>Limpiar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.resultado}>
        Resultado: {resultado !== 0 ? resultado : "Ingrese números para operar"}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    color: "#555",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    margin: 5,
    width: "40%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  clearButton: {
    backgroundColor: "#f44336",
    padding: 15,
    borderRadius: 8,
    margin: 5,
    width: "40%",
    alignItems: "center",
  },
  clearButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  resultado: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginTop: 30,
  },
});