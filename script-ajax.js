var best = null;

function callApi() {
    <!-- meilleur film -->
    fetch('http://localhost:8000/api/v1/titles?page_size=1&sort_by=-imdb_score')
        .then(response => {
            // Vérifier si la requête a réussi (statut 200 OK)
            if (!response.ok) {
                throw new Error('La requête a échoué');
            }
            // Parse la réponse en JSON
            return response.json();
        })
        .then(result => {
            // récuperer l'element d'index 0
            best = result.results[0];
            // faire appel api avec l'id trouvé
         fetch('http://localhost:8000/api/v1/titles/' + best.id)
            .then(response => {
                if (!response.ok) {
                    throw new Error('La requête a échoué');
                }
                return response.json();
            })
            .then(result => {
                 var temp ="<img class='feature__image' src=' " + result.image_url + "' onclick='toggleModal(" + result.id + ")'>";

              var title = "<p>" + result.title  +"</p>";
    var last = "<a class='play_button'>Play</a>" +
        "<p class='summaryBestMovie'>" +result.description +"</p>"
            document.getElementById('data0').innerHTML = temp;
            document.getElementById('data01').innerHTML += title + last;
            }) .catch(error => {
            console.error('Erreur lors de la récupération des données:', error);
        });
        })
        .catch(error => {
            // Gérer les erreurs
            console.error('Erreur lors de la récupération des données:', error);
        });
    <!-- requette 7 meilleurs -->
    fetch('http://localhost:8000/api/v1/titles?page_size=7&sort_by=-imdb_score')
        .then(response => {
            // Vérifier si la requête a réussi (statut 200 OK)
            if (!response.ok) {
                throw new Error('La requête a échoué');
            }
            // Parse la réponse en JSON
            return response.json();
        })
        .then(result => {
            // Traiter les données
            console.log(result);

            var temp = "";
            result.results.forEach((itemData) => {

                temp += "<img class='imag' style='cursor: pointer' onclick='toggleModal(" + itemData.id + ")' src=' " + itemData.image_url + "'>";
                temp + "";
            });
            document.getElementById('carousel').innerHTML = temp;
        })
        .catch(error => {
            // Gérer les erreurs
            console.error('Erreur lors de la récupération des données:', error);
        });
    <!-- requette category musical -->
    fetch('http://localhost:8000/api/v1/titles?page_size=7&genre_contains=Musical&sort_by=-imdb_score')
        .then(response => {
            // Vérifier si la requête a réussi (statut 200 OK)
            if (!response.ok) {
                throw new Error('La requête a échoué');
            }
            // Parse la réponse en JSON
            return response.json();
        })
        .then(result => {
            // Traiter les données
            console.log(result);

            var temp = "";
            result.results.forEach((itemData) => {

                temp += "";
                temp += "<img class='imag' onclick='toggleModal(" + itemData.id + ")'  src=' " + itemData.image_url + "'>";
                temp + "";
            });
            document.getElementById('data1').innerHTML = temp;
        })
        .catch(error => {
            // Gérer les erreurs
            console.error('Erreur lors de la récupération des données:', error);
        });

    <!-- requette category comedy -->
    fetch('http://localhost:8000/api/v1/titles?page_size=7&genre_contains=comedy&sort_by=-imdb_score')
        .then(response => {
            // Vérifier si la requête a réussi (statut 200 OK)
            if (!response.ok) {
                throw new Error('La requête a échoué');
            }
            // Parse la réponse en JSON
            return response.json();
        })
        .then(result => {
            // Traiter les données
            console.log(result);

            var temp = "";
            result.results.forEach((itemData) => {

                temp += "";
                temp += "<img class='imag' onclick='toggleModal(" + itemData.id + ")'  src=' " + itemData.image_url + "'>";
                temp + "";
            });
            document.getElementById('data2').innerHTML = temp;
        })
        .catch(error => {
            // Gérer les erreurs
            console.error('Erreur lors de la récupération des données:', error);
        });

    <!-- requette category drama -->
    fetch('http://localhost:8000/api/v1/titles?page_size=7&genre_contains=drama&sort_by=-imdb_score')
        .then(response => {
            // Vérifier si la requête a réussi (statut 200 OK)
            if (!response.ok) {
                throw new Error('La requête a échoué');
            }
            // Parse la réponse en JSON
            return response.json();
        })
        .then(result => {
            // Traiter les données
            console.log(result);

            var temp = "";
            result.results.forEach((itemData) => {

                temp += "";
                temp += "<img class='imag' onclick='toggleModal(" + itemData.id + ")'  src=' " + itemData.image_url + "'>";
                temp + "";
            });
            document.getElementById('data3').innerHTML = temp;
        })
        .catch(error => {
            // Gérer les erreurs
            console.error('Erreur lors de la récupération des données:', error);
        });

}

var isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
var carousel = document.querySelector(".carousel");


function toggleModal(id) {
    let modal = document.getElementById('modal');
    if (id !== 0) {
        fetch('http://localhost:8000/api/v1/titles/' + id)
            .then(response => {
                if (!response.ok) {
                    throw new Error('La requête a échoué');
                }
                return response.json();
            })
            .then(result => {
                let infos = "<div class='modal-image'>";
                infos += "<img  width='350px' height='250px' src=' " + result.image_url + "'></div>";
                let titleText = "<h1>Titre : " + result.title + "</h1>";
                document.getElementById('modal-header').innerHTML = titleText;
                infos += "<p> Genre : ";
                for (var i = 0; i < result.genres.length; i++) {
                    infos += result.genres[i] + " , ";
                }
                infos += "</p>";
                infos += "<p>Date Sortie : " + result.date_published + "</p>";
                infos += "<p>Rate : " + result.rated + "</p>";
                infos += "<p>Score Imdb : " + result.imdb_score + "</p>";
                 infos += "<p>Score Box Office : " + result.avg_vote + "</p>";
                infos += "<p>Durée : " + result.duration + "</p></br></br></br></br>";
                  infos += "<p> Réalisateurs : ";
                for (var j = 0; j < result.writers.length; j++) {
                    infos += result.writers[j] + " , ";
                }
                infos += "</p>";
                infos += "<p> Acteurs : ";
                for (var j = 0; j < result.actors.length; j++) {
                    infos += result.actors[j] + " , ";
                }
                infos += "</p>";
                infos += "<p> Pays : ";
                for (var j = 0; j < result.countries.length; j++) {
                    infos += result.countries[j] + " , ";
                }
                infos += "</p>";
                infos += "<p>Description : " + result.description + "</p>";

                document.getElementById('infos').innerHTML = infos;
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données:', error);
            });

    }
    if (modal.classList.contains("modal-show")) {
        modal.classList.add("modal-hide");
        setTimeout(() => {
            document.body.style.overflow = "initial";
            modal.classList.remove("modal-show", "modal-hide");
            modal.style.display = "none";
        }, 200);
    } else {
        document.body.style.overflow = "hidden";
        modal.style.display = "flex";
        modal.classList.add("modal-show");
    }

}


const showHideIcons = (idx) => {
    let arrowIcons = document.querySelectorAll(".wrapper")[idx].querySelectorAll("i");
    const carr = document.querySelectorAll('.carousel')[idx];
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carr.scrollWidth - carr.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carr.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carr.scrollLeft == scrollWidth ? "none" : "block";
}

function moveSroll(iconId, idx) {
    let firstImgWidth = document.querySelectorAll(".imag")[0].clientWidth + 14; // getting first img width & adding 14 margin value
    // if clicked icon is left, reduce width value from the carousel scroll left else add to it
    document.querySelectorAll(".carousel")[idx].scrollLeft += iconId == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(idx), 60); // calling showHideIcons after 60ms
}