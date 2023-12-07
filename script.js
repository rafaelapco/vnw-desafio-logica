console.log("Ano novo está chegando!!");

let nomeCantora = "Mariah Carey";
let idadeMariah = 54; 
let anoAtual = new Date().getFullYear();

let dataNascimentoMariah = anoAtual - idadeMariah;
console.log("Nome da cantora: " + nomeCantora);
console.log("Ano de nascimento da Mariah Carey: " + dataNascimentoMariah);

let quartaFeira = true;
console.log("É quarta-feira? " + quartaFeira);
console.log("Tipo de dado da variável quartaFeira: " + typeof quartaFeira);

if (idadeMariah >= 18) {
    console.log("Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey.");
} else {
    console.log("Sinto muito, mas assistirá da TV Globo.");
}

let mesNascimento = "Julho";

if (mesNascimento === "Agosto" || mesNascimento === "Dezembro" || mesNascimento === "Junho") {
    console.log("Uma ou mais opções estão corretas. O mês escolhido foi " + mesNascimento + ".");
} else {
    console.log("Algo de errado não está certo. O mês digitado foi " + mesNascimento + ".");
}
