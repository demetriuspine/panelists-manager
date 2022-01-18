const { promises } = require('fs');

const indexRelativeFilepath = './talker.json';

async function panelistCreation(req, res) {
  const { name, age, talk } = req.body;
  try {
    const data = await promises.readFile(indexRelativeFilepath, 'utf-8');
    const parsedData = await JSON.parse(data);
    const newPanelist = {
      id: parsedData.length + 1,
      name,
      age,
      talk,
    };
    const newData = [...parsedData, newPanelist];
    await promises.writeFile(indexRelativeFilepath, JSON.stringify(newData)); // https://stackoverflow.com/questions/31978347/fs-writefile-in-a-promise-asynchronous-synchronous-stuff
    res.status(201).json(newPanelist);
  } catch (err) {
    console.error(`Erro ao ler ou escrever o arquivo: ${err.message}`);
  }
}

module.exports = panelistCreation;