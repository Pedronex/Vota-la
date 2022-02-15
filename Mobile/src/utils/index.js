export function formatDateTime(textDate) {
  const date = new Date(textDate);
  let formatDate = "";

  //Dia
  if (date.getDate() < 10) {
    formatDate += "0" + date.getDate();
  } else {
    formatDate += date.getDate();
  }

  formatDate += "/";
  //Mês
  if (date.getMonth() + 1 < 10) {
    formatDate += "0" + (date.getMonth() + 1);
  } else {
    formatDate += date.getMonth() + 1;
  }

  formatDate += "/";
  //Ano
  formatDate += date.getFullYear();
  formatDate += " ";

  //Hora
  if (date.getHours() < 10) {
    formatDate += "0" + date.getHours();
  } else {
    formatDate += date.getHours();
  }

  formatDate += ":";

  //Minutos
  if (date.getMinutes() < 10) {
    formatDate += "0" + date.getMinutes();
  } else {
    formatDate += date.getMinutes();
  }

  return formatDate;
}
