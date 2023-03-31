'use strict';

/**
 * meun service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::meun.meun');
