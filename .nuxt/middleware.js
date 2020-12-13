const middleware = {}

middleware['admin'] = require('..\\middleware\\admin.js')
middleware['admin'] = middleware['admin'].default || middleware['admin']

middleware['auth'] = require('..\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['dietician'] = require('..\\middleware\\dietician.js')
middleware['dietician'] = middleware['dietician'].default || middleware['dietician']

middleware['guest'] = require('..\\middleware\\guest.js')
middleware['guest'] = middleware['guest'].default || middleware['guest']

middleware['notadmin'] = require('..\\middleware\\notadmin.js')
middleware['notadmin'] = middleware['notadmin'].default || middleware['notadmin']

middleware['session-control'] = require('..\\middleware\\session-control.js')
middleware['session-control'] = middleware['session-control'].default || middleware['session-control']

export default middleware
