/**
 * Set State
 */
export const state = () => ( {
  settings: {},
  nutrients: [],
  empty_url: null,
  recipeCategories: [],
  criterias: [],
  doctors: [],
  searchs: []
} );

/**
 * Set Mutations
 */
export const mutations = {
  setSiteSettings( state, settings ) {
    state.settings = settings
  },
  setNutrients( state, nutrients ) {
    state.nutrients = nutrients;
  },
  setEmptyURL( state, empty_url ) {
    state.empty_url = empty_url;
  },
  setRecipeCategories( state, recipeCategories ) {
    state.recipeCategories = recipeCategories
  },
  setCriterias( state, criterias ) {
    state.criterias = criterias
  },
  setDoctors( state, doctors ) {
    state.doctors = doctors
  },
  setSearchs( state, searchs ) {
    state.searchs = searchs
  }
}

/**
 * Set Actions
 * @type {{logout(*): void, nuxtServerInit(*, *), RegisterUser(*, *): Promise<*>}}
 */
export const actions = {
  async nuxtServerInit( {
    dispatch
  } ) {
    await dispatch( 'getSettings' )
  },
  async getSettings( store ) {
    let res = await this.$axios.get( process.env.apiBaseUrl + "home/" );
    store.commit( 'setSiteSettings', res.data.data )
  },
  /**
   * Register User Function
   * @param vuexContext
   * @param registerData
   * @returns {Promise<*>}
   * @constructor
   */
  RegisterUser( vuexContext, registerData ) {
    let registerLink = "users/register";
    if ( registerData.get( "isDietician" ) ) {
      registerLink = "dietician/register"
    }
    return this.$axios.post( process.env.apiBaseUrl + registerLink, registerData, {
        json: true,
        withCredentials: false,
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Credentials': true,
          "Content-Type": "multipart/form-data; boundary=" + registerData._boundary
        },
      } )
      .then( response => {
        return response.data
      } )
  },
  /**
   * Nutrients Function
   */
  getNutrients( vuexContext, context ) {
    let nutrientsURL = "nutrients";
    if ( context.nutrientsURL ) {
      nutrientsURL = context.nutrientsURL
    }
    return this.$axios.get( process.env.apiBaseUrl + nutrientsURL ).then( response => {
      if ( response.data !== null && response.data !== undefined && response.data !== "" ) {
        vuexContext.commit( "setNutrients", response.data.data )
        vuexContext.commit( "setEmptyURL", response.data.empty_url )
      }
    } )
  },
  /**
   * Recipe Categories Function
   */
  getRecipeCategories( vuexContext, context ) {
    let recipeCategoriesURL = "recipe-categories";
    if ( context.recipeCategoriesURL ) {
      recipeCategoriesURL = context.recipeCategoriesURL
    }
    return this.$axios.get( process.env.apiBaseUrl + recipeCategoriesURL ).then( response => {
      if ( response.data !== null && response.data !== undefined && response.data !== "" ) {
        vuexContext.commit( "setRecipeCategories", response.data.data )
      }
    } )
  },
  /**
   * Criterias Function
   */
  getCriterias( vuexContext, context ) {
    let criteriasURL = "criteria";
    if ( context.criteriasURL ) {
      criteriasURL = context.criteriasURL
    }
    return this.$axios.get( process.env.apiBaseUrl + criteriasURL ).then( response => {
      if ( response.data !== null && response.data !== undefined && response.data !== "" ) {
        vuexContext.commit( "setCriterias", response.data.data )
      }
    } )
  },
  /**
   * Doctors Function
   */
  getDoctors( vuexContext, context ) {
    let doctorsURL = "doctors";
    if ( context.doctorsURL ) {
      doctorsURL = context.doctorsURL
    }
    return this.$axios.get( process.env.apiBaseUrl + doctorsURL ).then( response => {
      if ( response.data !== null && response.data !== undefined && response.data !== "" ) {
        vuexContext.commit( "setDoctors", response.data.data.doctors )
      }
    } )
  },
  /**
   * Search Data Function
   */
  getSearchs( vuexContext, context ) {
    let searchsURL = "search";
    if ( context.searchsURL ) {
      searchsURL = context.searchsURL
    }
    return this.$axios.get( process.env.apiBaseUrl + searchsURL ).then( response => {
      if ( response.data !== null && response.data !== undefined && response.data !== "" ) {
        vuexContext.commit( "setSearchs", response.data.data )
      }
    } )
  }
}

export const getters = {
  /**
   * Get Nutrients Function
   */
  nutrients( state ) {
    return state.nutrients
  },
  /**
   * Get Empty Url Function
   */
  empty_url( state ) {
    return state.empty_url
  },
  /**
   * Get Recipe Categories Function
   */
  recipeCategories( state ) {
    return state.recipeCategories
  },
  /**
   * Get Criterias Function
   */
  criterias( state ) {
    return state.criterias
  },
  /**
   * Get Doctors Function
   */
  doctors( state ) {
    return state.doctors
  },
  /**
   * Get Search Data Function
   */
  searchs( state ) {
    return state.searchs
  }
}
