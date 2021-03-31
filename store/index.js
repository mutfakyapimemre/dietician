/**
 * IsEmpty Function
 */
function isEmpty( obj ) {
  if ( typeof obj == "number" ) return false;
  else if ( typeof obj == "string" ) return obj.length == 0;
  else if ( Array.isArray( obj ) ) return obj.length == 0;
  else if ( typeof obj == "object" )
    return obj == null || Object.keys( obj ).length == 0;
  else if ( typeof obj == "boolean" ) return false;
  else return !obj;
}

/**
 * Set State
 */
export const state = () => ( {
  settings: null,
  nutrients: [],
  empty_url: null,
  recipeCategories: [],
  criterias: [],
  dieticians: [],
  searchs: []
} );

/**
 * Set Mutations
 */
export const mutations = {
  SET_WEBSITEDATA( state, settings ) {
    state.settings = settings;
  },
  setNutrients( state, nutrients ) {
    state.nutrients = nutrients;
  },
  setEmptyURL( state, empty_url ) {
    state.empty_url = empty_url;
  },
  setRecipeCategories( state, recipeCategories ) {
    state.recipeCategories = recipeCategories;
  },
  setCriterias( state, criterias ) {
    state.criterias = criterias;
  },
  setDieticians( state, dieticians ) {
    state.dieticians = dieticians;
  },
  setSearchs( state, searchs ) {
    state.searchs = searchs;
  }
};

/**
 * Set Actions
 * @type {{logout(*): void, nuxtServerInit(*, *), RegisterUser(*, *): Promise<*>}}
 */
export const actions = {
  nuxtServerInit( {
    dispatch
  } ) {
    dispatch( "LOAD_WEBSITEDATA" );
  },
  async LOAD_WEBSITEDATA( {
    commit
  } ) {
    return await this.$axios
      .get( process.env.apiBaseUrl + "home/" )
      .then( async res => {
        await commit( "SET_WEBSITEDATA", res.data.data );
        return await res.data.data;
      } );
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
      registerLink = "dietician/register";
    }
    return this.$axios
      .post( process.env.apiBaseUrl + registerLink, registerData, {
        json: true,
        withCredentials: false,
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Credentials": true,
          "Content-Type": "multipart/form-data; boundary=" + registerData._boundary
        }
      } )
      .then( response => {
        return response.data;
      } );
  },
  /**
   * Nutrients Function
   */
  getNutrients( vuexContext, context ) {
    let nutrientsURL = "nutrients";
    if ( context.nutrientsURL ) {
      nutrientsURL = context.nutrientsURL;
    }
    return this.$axios
      .get( process.env.apiBaseUrl + nutrientsURL )
      .then( response => {
        if ( !isEmpty( response.data ) ) {
          vuexContext.commit( "setNutrients", response.data.data );
          vuexContext.commit( "setEmptyURL", response.data.empty_url );
        }
      } );
  },
  /**
   * Recipe Categories Function
   */
  getRecipeCategories( vuexContext, context ) {
    let recipeCategoriesURL = "recipe-categories";
    if ( context.recipeCategoriesURL ) {
      recipeCategoriesURL = context.recipeCategoriesURL;
    }
    return this.$axios
      .get( process.env.apiBaseUrl + recipeCategoriesURL )
      .then( response => {
        if ( !isEmpty( response.data ) ) {
          vuexContext.commit( "setRecipeCategories", response.data.data );
        }
      } );
  },
  /**
   * Criterias Function
   */
  getCriterias( vuexContext, context ) {
    let criteriasURL = "criteria";
    if ( context.criteriasURL ) {
      criteriasURL = context.criteriasURL;
    }
    return this.$axios
      .get( process.env.apiBaseUrl + criteriasURL )
      .then( response => {
        if ( !isEmpty( response.data ) ) {
          vuexContext.commit( "setCriterias", response.data.data );
        }
      } );
  },
  /**
   * Dieticians Function
   */
  getDieticians( vuexContext, context ) {
    let dieticiansURL = "dieticians";
    if ( context.dieticiansURL ) {
      dieticiansURL = context.dieticiansURL;
    }
    return this.$axios
      .get( process.env.apiBaseUrl + dieticiansURL )
      .then( response => {
        if ( !isEmpty( response.data ) ) {
          vuexContext.commit( "setDieticians", response.data.data.dieticians );
        }
      } );
  },
  /**
   * Search Data Function
   */
  getSearchs( vuexContext, context ) {
    let searchsURL = "search";
    if ( context.searchsURL ) {
      searchsURL = context.searchsURL;
    }
    return this.$axios
      .get( process.env.apiBaseUrl + searchsURL )
      .then( response => {
        if ( !isEmpty( response.data ) ) {
          vuexContext.commit( "setSearchs", response.data.data );
        }
      } );
  }
};

export const getters = {
  /**
   *
   * @param {*} state
   * @returns
   */
  settings( state ) {
    return state.settings;
  },
  /**
   * Get Nutrients Function
   */
  nutrients( state ) {
    return state.nutrients;
  },
  /**
   * Get Empty Url Function
   */
  empty_url( state ) {
    return state.empty_url;
  },
  /**
   * Get Recipe Categories Function
   */
  recipeCategories( state ) {
    return state.recipeCategories;
  },
  /**
   * Get Criterias Function
   */
  criterias( state ) {
    return state.criterias;
  },
  /**
   * Get Dieticians Function
   */
  dieticians( state ) {
    return state.dieticians;
  },
  /**
   * Get Search Data Function
   */
  searchs( state ) {
    return state.searchs;
  }
};
