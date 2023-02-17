export default function formatarData(dataString) {
  const data = new Date(dataString);
  if (Number.isNaN(data.getTime())) {
    throw new Error('Data inválida');
  }
  const [ano, mes, dia] = data.toISOString().substr(0, 10).split('-');
  return `${ano}-${mes}-${dia}`;
}
