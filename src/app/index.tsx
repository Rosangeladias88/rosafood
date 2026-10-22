
import { useState } from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const produtos = [
  { id: 1, nome: 'Hambúrguer', preco: 18, emoji: '🍔' },
  { id: 2, nome: 'Pizza', preco: 35, emoji: '🍕' },
  { id: 3, nome: 'Refrigerante', preco: 7, emoji: '🥤' },
];

export default function HomeScreen() {
  const [carrinho, setCarrinho] = useState<number[]>([]);

  function adicionarProduto(id: number) {
    setCarrinho((anterior) => [...anterior, id]);
  }

  const total = carrinho.reduce((soma, id) => {
    const produto = produtos.find((item) => item.id === id);
    return soma + (produto?.preco ?? 0);
  }, 0);

  
async function finalizarPedido() {
  if (carrinho.length === 0) {
    Alert.alert('Carrinho vazio', 'Adicione um produto primeiro.');
    return;
  }

  try {
    const resposta = await fetch(
      'http://192.168.100.10:3000/pedidos',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itens: carrinho,
        }),
      }
    );

    if (!resposta.ok) {
      throw new Error('Falha ao enviar pedido');
    }

    const dados = await resposta.json();

    Alert.alert(
      'RosaFood',
      `${dados.mensagem}\nTotal: R$ ${dados.total.toFixed(2).replace('.', ',')}`
    );

    setCarrinho([]);
  } catch (erro) {
    Alert.alert(
      'Erro de conexão',
      'Não foi possível enviar o pedido ao servidor.'
    );
    console.error(erro);
  }
}


  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.titulo}>🍔 RosaFood</Text>
      <Text style={styles.subtitulo}>Nosso cardápio</Text>

      {produtos.map((produto) => (
        <View key={produto.id} style={styles.card}>
          <Text style={styles.emoji}>{produto.emoji}</Text>
          <Text style={styles.nome}>{produto.nome}</Text>
          <Text style={styles.preco}>
            R$ {produto.preco.toFixed(2).replace('.', ',')}
          </Text>

          <Pressable
            style={styles.botao}
            onPress={() => adicionarProduto(produto.id)}
            accessibilityRole="button"
          >
            <Text style={styles.textoBotao}>
              Adicionar ao pedido
            </Text>
          </Pressable>
        </View>
      ))}

      <View style={styles.resumo}>
        <Text style={styles.nome}>
          Itens no carrinho: {carrinho.length}
        </Text>
        <Text style={styles.nome}>
          Total: R$ {total.toFixed(2).replace('.', ',')}
        </Text>

        <Pressable
          style={styles.botao}
          onPress={finalizarPedido}
          accessibilityRole="button"
        >
          <Text style={styles.textoBotao}>
            Finalizar pedido
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F2',
  },
  content: {
    padding: 24,
    paddingTop: 50,
    paddingBottom: 60,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#E85D04',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    elevation: 3,
  },
  emoji: {
    fontSize: 45,
  },
  nome: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 8,
  },
  preco: {
    fontSize: 18,
    color: '#E85D04',
    marginBottom: 12,
  },
  botao: {
    backgroundColor: '#E85D04',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resumo: {
    backgroundColor: '#FFE8D6',
    borderRadius: 16,
    padding: 20,
    marginTop: 10,
  },
});
