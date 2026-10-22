
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍔 RosaFood</Text>
      <Text style={styles.subtitle}>
        Bem-vindo ao nosso aplicativo!
      </Text>
      <Text style={styles.description}>
        Faça seus pedidos de forma rápida e fácil.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#E85D04',
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginTop: 12,
    color: '#666666',
    textAlign: 'center',
  },
});
