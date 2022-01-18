const { promises } = require('fs');

const indexRelativeFilepath = './talker.json';

async function editPanelistById(req, res) {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const updatedPanelist = { id: Number(id), name, age, talk };
  try {
    const data = await promises.readFile(indexRelativeFilepath, 'utf-8');
    const parsedData = await JSON.parse(data);
    const panelistIndex = parsedData.findIndex((talker) => talker.id === Number(id));
    if (panelistIndex === -1) { // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    parsedData[panelistIndex] = updatedPanelist;
    await promises.writeFile(indexRelativeFilepath, JSON.stringify(parsedData));
    res.status(200).json(updatedPanelist);
  } catch (err) {
    console.error(`Erro ao ler ou escrever o arquivo: ${err.message}`);
  }
}

module.exports = editPanelistById;