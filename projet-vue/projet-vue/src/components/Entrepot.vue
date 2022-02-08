<script setup>
import { ref } from 'vue'

</script>

<template>
<section>
  <h2>Les pianos disponible<h2>
  <table>

    <thead>
      <tr>
        <th>Marque</th><th>Couleur</th><th>Stock</th>
      </tr>
    </thead>

    <tbody id="app">
      <tr v-for ="Entrepot in Entrepots">
        <td>{{ Entrepot.Marque }}</td>
        <td>{{ Entrepot.Couleur }}</td>
        <td>{{ Entrepot.Stock }}</td>
      </tr>
    </tbody>

    <tfoot>
      <tr>
        <td colspan="3">Délais sur commande très rapide</td>
      </tr>
    </tfoot>

  </table>
</section>
</template>

<style scoped>
#app{
  
  background-color: black;
  color: white;
  text-align: center;
  margin-top: 60px;
}
table{
  border: 2px solid yellow
}
section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
}

</style>

<script>

export default{
  data () {
    return {
      Entrepots: [ 
        { 
        "id":1,
        "Marque": "Bechstein",
        "Couleur": "Noir",
        "Stock": 7
        },
        {  
        "id":2,
        "Marque": "Blüthner",
        "Couleur": "Ivoir",
        "Stock": 2
        },
        { 
        "id":3,
        "Marque": "Burgasser",
        "Couleur": "Blanc",
        "Stock": 5
        },
        {  
        "id":4,
        "Marque": "J.Czapka",
        "Couleur": "Noir",
        "Stock": 6
        }
    ]
    }  
  },

  // mounted () {
  //   axios
  //     .get('./assets/entrepots.json')
  //     .then(response => (this.entrepots = response.data.entrepots))
  // }
}
</script>

