const middleware = {}

middleware['admin'] = require('..\\middleware\\admin.js')
middleware['admin'] = middleware['admin'].default || middleware['admin']

middleware['auth2'] = require('..\\middleware\\auth2.js')
middleware['auth2'] = middleware['auth2'].default || middleware['auth2']

middleware['dietician'] = require('..\\middleware\\dietician.js')
middleware['dietician'] = middleware['dietician'].default || middleware['dietician']

middleware['guest2'] = require('..\\middleware\\guest2.js')
middleware['guest2'] = middleware['guest2'].default || middleware['guest2']

middleware['notadmin'] = require('..\\middleware\\notadmin.js')
middleware['notadmin'] = middleware['notadmin'].default || middleware['notadmin']

export default middleware
