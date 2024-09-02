async function obterCotacaoMoeda(moedaBase, moedaDestino) {
    try {
      const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${moedaBase}`);
      const jsonData = await response.json();
  
      // Verificar se a resposta da API foi bem-sucedida
      if (!response.ok) {
        throw new Error("Erro ao obter taxa de câmbio: ${response.statusText}");
      }
      const taxaCambio = jsonData.rates[moedaDestino];
      if (!taxaCambio) {
        throw new Error(`Moeda de destino não encontrada: ${moedaDestino}`);
      }
  
      return taxaCambio;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  async function exemploConversaoMoeda() {
    try {
      const moedaBase = 'USD'; 
      const moedaDestino = 'EUR'; 
      const valorBase = 100; 
  
      const taxaCambio = await obterCotacaoMoeda(moedaBase, moedaDestino);
      const valorConvertido = valorBase * taxaCambio;
  
      console.log(`Valor convertido: ${valorBase} ${moedaBase} = ${valorConvertido} ${moedaDestino}`);
    } catch (error) {
      console.error(error);
    }
  }
  exemploConversaoMoeda();