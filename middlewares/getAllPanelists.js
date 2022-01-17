const { promises } = require('fs');

const indexRelativeFilepath = './talker.json';

async function getAllPanelists(_req, res) { // https://stackoverflow.com/questions/65986153/how-to-make-fs-readfile-async-await
  try {
    const data = await promises.readFile(indexRelativeFilepath, 'utf-8'); // https://stackoverflow.com/questions/50510316/async-await-function-fs-readfile-and-store-it-to-a-variable
    if (data.length === 0) return res.status(200).json([]);
    res.status(200).json(JSON.parse(data)); // https://www.tabnine.com/code/javascript/functions/asyncawait/await
  } catch (err) {
    console.error(`Não foi possível ler o arquivo ${indexRelativeFilepath}\n Erro: ${err}`);
  }
}

module.exports = getAllPanelists;