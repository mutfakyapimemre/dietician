/**
 * Import Libraries
 */
import Cookie from "js-cookie"
import {
  Base64
} from 'js-base64';

/**
 * Set State
 * @returns {{userData: null}}
 */
export const state = () => ( {
  isAdmin: null,
  userData: {},
  siteSettings: {},
  nutrients: [],
  empty_url: null,
  recipeCategories: [],
  criterias: [],
  doctors: [],
  searchs: []
} );

/**
 * Set Mutations
 * @type {{clearUserData(*): void, setUserData(*, *): void, setApiToken(*, *): void}}
 */
export const mutations = {
  setUserData( state, userData ) {
    if ( userData ) {
      state.userData = userData;
      state.isAdmin = userData.status
    }
  },
  clearUserData( state ) {
    Cookie.remove( "userData" )
    Cookie.remove( "isAdmin" )
    Cookie.remove( "expiresIn" )

    localStorage.removeItem( "userData" )
    localStorage.removeItem( "isAdmin" )
    localStorage.removeItem( "expiresIn" )

    state.userData = {}
    state.isAdmin = null
  },
  setSiteSettings( state, siteSettings ) {
    state.siteSettings = siteSettings
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
 * @type {{logout(*): void, nuxtServerInit(*, *), LoginUser(*, *): Promise<*>, initLogin(*, *=): (undefined), RegisterUser(*, *): Promise<*>}}
 */
export const actions = {

  async nuxtServerInit( vuexContext, context ) {
    return await this.$axios.get( process.env.apiBaseUrl + "home" ).then( response => {
      if ( response.data.data !== null && response.data.data !== undefined && response.data.data !== "" ) {
        vuexContext.commit( "setSiteSettings", response.data.data )
      }
    } )
  },
  initLogin( vuexContext, req ) {
    let expiresIn;
    let userData;

    if ( req ) {
      // Server Üzerinde Calisiyoruz....
      if ( !req.headers.cookie ) {
        return;
      }
      // Cookie üzerinden Api Token elde etmek..

      userData = req.headers.cookie.split( ";" ).find( c => c.trim().startsWith( "userData=" ) )

      if ( userData ) {
        userData = JSON.parse( Base64.decode( userData.split( "=" )[ 1 ] ) );
      }
      expiresIn = expiresIn = new Date().getTime() + 24 * 60 * 60
    } else {
      if ( ( Cookie.get( "userData" ) === null || Cookie.get( "userData" ) === '' || Cookie.get( "userData" ) === undefined ) ) {
        Cookie.remove( "userData" )
        Cookie.remove( "isAdmin" )
        Cookie.remove( "expiresIn" )
        if ( process.client ) {
          localStorage.removeItem( "userData" )
          localStorage.removeItem( "isAdmin" )
          localStorage.removeItem( "expiresIn" )
        }
        state.userData = {}
        state.isAdmin = null
      }
      // Client Üzerinde Calisiyoruz....
      if ( process.client ) {
        expiresIn = localStorage.getItem( "expiresIn" )
        if ( localStorage.getItem( "userData" ) !== undefined && localStorage.getItem( "userData" ) !== null && localStorage.getItem( "userData" ) !== "" ) {
          userData = JSON.parse( Base64.decode( localStorage.getItem( "userData" ) ) )
        } else {
          userData = {}
        }
      }
    }

    if ( new Date().getTime() > +expiresIn ) {
      vuexContext.commit( "clearUserData" )
    }
    if ( userData !== undefined && Object.keys( userData ).length > 0 && userData.api_token !== undefined && userData.api_token !== null && userData.api_token !== "" ) {
      this.$axios.defaults.headers.common = {
        'Authorization': `Bearer ${userData.api_token}`
      }
    } else {
      this.$axios.defaults.headers.common = {}
    }
    vuexContext.commit( "setUserData", userData );
  },
  /**
   * Login Function
   * @param vuexContext
   * @param loginData
   * @returns {Promise<*>}
   * @constructor
   */
  LoginUser( vuexContext, loginData ) {
    let loginLink = null;
    if ( loginData.get( "isUser" ) === "false" ) {
      loginLink = "panel/login";
    }
    if ( loginData.get( "isUser" ) === "true" && loginData.get( "isDietician" ) === "false" ) {
      loginLink = "users/login";
    }
    if ( loginData.get( "isUser" ) === "true" && loginData.get( "isDietician" ) === "true" ) {
      loginLink = "dietician/login"
    }
    return this.$axios.post( process.env.apiBaseUrl + loginLink,
        loginData, {
          json: true,
          withCredentials: false,
          mode: 'no-cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Credentials': true,
            "Content-Type": "multipart/form-data; boundary=" + loginData._boundary
          },
        } )
      .then( response => {
        if ( response.data.user !== undefined && response.data.user !== "" && response.data.user !== null ) {
          let expiresIn = new Date().getTime() * 7200
          /**
           * Set Cookies
           */
          Cookie.set( "expiresIn", expiresIn )
          Cookie.set( "userData", Base64.encode( JSON.stringify( response.data.user ) ) )
          Cookie.set( "isAdmin", response.data.user.status )
          /**
           * Set Local Storage
           */
          localStorage.setItem( "expiresIn", expiresIn )
          localStorage.setItem( "userData", Base64.encode( JSON.stringify( response.data.user ) ) )
          localStorage.setItem( "isAdmin", response.data.user.status )
          /**
           * Set State
           */
          if ( response.data.user.api_token ) {
            this.$axios.defaults.headers.common = {
              'Authorization': `Bearer ${response.data.user.api_token}`
            }
          } else {
            this.$axios.defaults.headers.common = {}
          }
          vuexContext.commit( "setUserData", response.data.user )
        }
        return response.data;
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
   * Logout Function
   * @param vuexContext
   */
  logout( vuexContext ) {
    vuexContext.commit( "clearUserData" )
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
   * is Authenticated Function
   * @param state
   * @returns {boolean}
   */
  isAuthenticated( state ) {

    return state.userData.api_token != null;
  },
  isAdmin( state ) {
    return ( state.userData.api_token != null && state.isAdmin === "admin" );
  },
  isDietician( state ) {
    return ( state.userData.api_token != null && state.isAdmin === "dietician" );
  },
  /**
   * Get Logged In User Data Function
   * @param state
   * @returns {null}
   */
  loggedInUser( state ) {
    return state.userData
  },
  /**
   * Get Site Settings Function
   */
  siteSettings( state ) {
    return state.siteSettings
  },
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
