const { promises } = require('fs');

const indexRelativeFilepath = './talker.json';

async function deletePanelist(req, res) {
  const { id } = req.params;

  try {
    const data = await promises.readFile(indexRelativeFilepath, 'utf-8');
    const parsedData = await JSON.parse(data);
    const panelistIndex = parsedData.findIndex((talker) => talker.id === Number(id));
    if (panelistIndex === -1) { // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    parsedData.splice(panelistIndex, 1); // https://www.delftstack.com/pt/howto/javascript/javascript-remove-object-from-array/
    await promises.writeFile(indexRelativeFilepath, JSON.stringify(parsedData));
    res.status(204).end(); // https://qastack.com.br/programming/29555290/what-is-the-difference-between-res-end-and-res-send e https://expressjs.com/pt-br/api.html
  } catch (err) {
    console.error(`Erro ao ler ou escrever o arquivo: ${err.message}`);
  }
}

module.exports = deletePanelist;