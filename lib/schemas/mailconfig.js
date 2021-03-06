const joi = require('joi')

module.exports = joi.object().keys({
  from: joi.string().email().required(),
  to: joi.array().items(joi.object().keys({
    email:joi.string().email().required(),
    name:joi.string()
  })),
  name: joi.string(),
  subject: joi.string(),
  text: joi.string(),
  html: joi.string(),
  content_type: joi.string(),
  template_id:joi.string(),
  dynamic_template_data:joi.object(),
})
