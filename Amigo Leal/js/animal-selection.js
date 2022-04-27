
var selectedAnimal = "dog";

function animalSelection(selectedAnimal,showedAnimal)
{
    //seleciona a classe amigo-leal e muda a imagem dela
    document.querySelector('.amigo-leal').src=showedAnimal;

    //Dependendo do animal selecionado, muda as cores dos botões de seleção de animais
    if(selectedAnimal=="dog"){

        //ALTERNA IMAGEM DOS ICONES
        document.querySelector('.dog').src="imagens/animal_selection/dog_hover.png";
        document.querySelector('.dog-icon').src="imagens/animal_selection/dog_hover.png";
        document.querySelector('.cat').src="imagens/animal_selection/cat.png";
        document.querySelector('.cat-icon').src="imagens/animal_selection/cat.png";

        //Muda a cor das palavras cachorro e gato dependendo da seleção
        document.querySelector('.dog-title').style.color="var(--vermelho-escuro)";
        document.querySelector('.cat-title').style.color="black";
        //Muda o titulo chamativo
        document.querySelector('.titulo-animal').id="dog";
        //Muda background
        document.body.style.backgroundImage="url('imagens/background.jpg')";
    }
    if(selectedAnimal=="cat"){

        //ALTERNA IMAGEM DOS ICONES
        document.querySelector('.cat').src="imagens/animal_selection/cat_hover.png";
        document.querySelector('.cat-icon').src="imagens/animal_selection/cat_hover.png";
        document.querySelector('.dog').src="imagens/animal_selection/dog.png";
        document.querySelector('.dog-icon').src="imagens/animal_selection/dog.png";

        //Muda a cor das palavras cachorro e gato dependendo da seleção
        document.querySelector('.cat-title').style.color="var(--vermelho-escuro)";
        document.querySelector('.dog-title').style.color="black";
        //Muda o titulo chamativo
        document.querySelector('.titulo-animal').id="cat";
        //Muda background
        document.body.style.backgroundImage="url('imagens/background-night.jpg')";
    }

    atualizaPosts();

    function atualizaPosts(){
        if(selectedAnimal=="dog")
        {
            //POST 1
            document.getElementById("animal-picture-1").src="imagens/dogs/nina_ana.jpg";
            document.getElementById("animal-nome-1").textContent="Nina";
            document.getElementById("divulgador-1").textContent="Publicado por Ana Clara";
            document.getElementById("animal-desc-1").textContent="Nina ama brincar e está ansiosa para ser adotada por uma boa alma.";

            //POST 2
            document.getElementById("animal-picture-2").src="imagens/dogs/carambola_vitor.jpg";
            document.getElementById("animal-nome-2").textContent="Carambola";
            document.getElementById("divulgador-2").textContent="Publicado por Vitor Goddin";
            document.getElementById("animal-desc-2").textContent="Carambola precisa que alguém com um ambiente estruturado o adote.";

            //POST 3
            document.getElementById("animal-picture-3").src="imagens/dogs/bilbo_valeria.jpg";
            document.getElementById("animal-nome-3").textContent="Bilbo";
            document.getElementById("divulgador-3").textContent="Publicado por Valéria Abrão";
            document.getElementById("animal-desc-3").textContent="Esse cachorro apareceu no meu portão faz 3 dias e já coloquei o nome de Bilbo nele. Preciso que alguém pegue ele pra mim. Contato na bio!";
        }

        if(selectedAnimal=="cat")
        {
            //POST 1
            document.getElementById("animal-picture-1").src="imagens/cats/filhote_joao.jpg";
            document.getElementById("animal-nome-1").textContent="Filhote";
            document.getElementById("divulgador-1").textContent="Publicado por João Gabriel";
            document.getElementById("animal-desc-1").textContent="Por favor alguem adota esse filhote!! abandoram ele aqui perto de casa, acho que ele não tem nem 3 meses.";

            //POST 2
            document.getElementById("animal-picture-2").src="imagens/cats/filhotes_karol.jpg";
            document.getElementById("animal-nome-2").textContent="Filhotes de gato";
            document.getElementById("divulgador-2").textContent="Publicado por Karol Rodrigues";
            document.getElementById("animal-desc-2").textContent="Gente olha que coisinhas mais fofas, preciso que alguém responsável leve alguns";

            //POST 3
            document.getElementById("animal-picture-3").src="imagens/cats/gandalf_ezequiel.jpg";
            document.getElementById("animal-nome-3").textContent="Gandalf";
            document.getElementById("divulgador-3").textContent="Publicado por Ezequiel Weber";
            document.getElementById("animal-desc-3").textContent="Gandalf já é conhecido aqui da vizinhança, mas seria bom se ele conseguisse um lar";
        }
    }
}
function fechaTelaFlutuante()
{
    document.querySelector('.cat-or-dog-background').style.display="none";
    document.querySelector('.login-form-background').style.display="none";
    document.querySelector('.login-form').style.display="none";
    document.querySelector('.aba-lateral').style.transform="translateX(100%)";
    for(num=1;num<=4;num++){
        document.getElementById("guia"+num).classList.remove("guias-site-selected");
    }
}
function abreLoginForm()
{
    document.querySelector('.login-form-background').style.display="block";
    document.querySelector('.login-form').style.display="block";
}