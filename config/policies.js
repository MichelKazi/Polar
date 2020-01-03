/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {


  controllerName: {
    'action-name': 'isAuthenticated'
  },

  'signup': true,
  'login': true,
  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/
  'add-image': 'isAuthenticated',
  'show-profiles': 'isAuthenticated',
  'update-location': 'isAuthenticated'

  // '*': true,

};
