export default {
    namespaced:true,
    state: {
        couleurPrincipale: "#03566a",
        couleurSecondaire: "#056b84"
    },
    mutations: {
        SET_COUL_PRINCIPALE(state, couleur) {
            state.couleurPrincipale = couleur;
        },
        SET_COUL_SECOND(state, couleur) {
            state.couleurSecondaire= couleur;
        }

    },
    getters:{
      couleurs(state){
          return {
              principale:state.couleurPrincipale,
              second:state.couleurSecondaire
          }
      }
    },
    actions:{
        changerCouleur({commit},color ){
            
          commit('SET_COUL_PRINCIPALE',color);
          commit('SET_COUL_SECOND',color);
        }
    },

}