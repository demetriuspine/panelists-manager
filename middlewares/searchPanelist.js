const { promises } = require('fs');

const indexRelativeFilepath = './talker.json';

async function searchPanelist(req, res) {
  const { q } = req.query;

  try {
    const data = await promises.readFile(indexRelativeFilepath, 'utf-8');
    const parsedData = await JSON.parse(data);
    if (!q) {
      return res.status(200).json(parsedData);
    }
    const filteredPanelists = parsedData.filter(({ name }) => name.includes(q));

    res.status(200).json(filteredPanelists);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

module.exports = searchPanelist;