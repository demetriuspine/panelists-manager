const { promises } = require('fs');

const indexRelativeFilepath = './talker.json';

async function getPanelistById(req, res) {
  const { id } = req.params;
  try {
    const data = await promises.readFile(indexRelativeFilepath, 'utf-8');
    const requestedPanelist = JSON.parse(data).find((panelist) => panelist.id.toString() === id);
    if (!requestedPanelist || requestedPanelist.length === 0) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    res.status(200).json(requestedPanelist);
  } catch (err) {
    console.error(`Não foi possível ler o arquivo ${indexRelativeFilepath}\n Erro: ${err}`);
  }
}

module.exports = getPanelistById;
