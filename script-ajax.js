
function openModal(id){
 let model = document.getElementById("model1");
  fetch('http://localhost:8000/api/v1/titles/' + id)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('La requête a échoué');
                    }
                    return response.json();
                })
                .then(result => {
                 let infos = "";
   infos +="<div > ";
  /** L’image de la pochette du film
Le Titre du film
Le genre complet du film
Sa date de sortie
Son Rated
Son score Imdb
Son réalisateur
La liste des acteurs
Sa durée
Le pays d’origine
Le résultat au Box Office
Le résumé du film */
  console.log("resultat : " + JSON.stringify(result))
   infos += "<img width='150px' height='150px' src=' " + result.image_url + "'>";
            infos += "<p>Title : " + result.title + "</p>";
             infos += "<p> Genre : ";
            for(var i=0; i<result.genres.length;i++) {
                 infos += result.genres[i] + " , ";
            }
              infos += "</p>";
             infos += "<p>Date Sortie : " + result.date_published + "</p>";
             infos += "<p>Rate : " + result.rated + "</p>";
             infos += "<p>Score Imdb : " + result.imdb_score + "</p>";
               infos += "<p> Réalisateurs : ";
               for(var j=0; j<result.writers.length;j++) {
                 infos += result.writers[j] + " , ";
            }
             infos += "</p>";
             infos += "<p> Acteurs : ";
              for(var j=0; j<result.actors.length;j++) {
                 infos += result.actors[j] + " , ";
            }
             infos += "</p>";

             infos += "<p>Durée : " + result.duration + "</p>";

              infos += "<p> Pays : ";
              for(var j=0; j<result.countries.length;j++) {
                 infos += result.countries[j] + " , ";
            }
             infos += "</p>";
            infos += "<p>Score Box Office : " + result.avg_vote + "</p>";
            infos += "<p>Description : " + result.description + "</p>";

            infos += "</div>";
          document.getElementById('infos').innerHTML = infos;
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des données:', error);
                });
 model.className = "modal active";
}

function closeModal(){
  document.getElementById("model1").className = "modal";
}

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
                    // Traiter les données
                    console.log(result);

                    var temp = "";
          result.results.forEach((itemData) => {

            temp +="<div class=img>";
            temp += "<td><img width='150%' height='150%' src=' " + itemData.image_url + "'></td>";
            temp +"</div>";
          });
          document.getElementById('data').innerHTML = temp;
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

                    var temp = "<div>";
          result.results.forEach((itemData) => {

            temp += "<img style='cursor: pointer' onclick='openModal(" + itemData.id +")' src=' " + itemData.image_url + "'>";
            temp +"</div>";
          });
          document.getElementById('data1').innerHTML =temp;
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

            temp +="<div class=img>";
            temp += "<td><img src=' " + itemData.image_url + "'></td>";
            temp +"</div>";
          });
          document.getElementById('data2').innerHTML = temp;
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

            temp +="<div class=img>";
            temp += "<td><img src=' " + itemData.image_url + "'></td>";
            temp +"</div>";
          });
          document.getElementById('data3').innerHTML = temp;
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

            temp +="<div class=img>";
            temp += "<td><img src=' " + itemData.image_url + "'></td>";
            temp +"</div>";
          });
          document.getElementById('data4').innerHTML = temp;
                })
                .catch(error => {
                    // Gérer les erreurs
                    console.error('Erreur lors de la récupération des données:', error);
                });

        }
