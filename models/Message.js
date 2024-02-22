const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({

bdoy:{
  type: String,
  required: true
},
from:{
    type: UserSchema.Types.objecId,
    ref: 'user',
    required : true
},
to:{
 type: UserSchema.Types.objecId,
    ref: 'user',
    required : true
  },

  readed:{
    type: Boolean,
    required :true,
    default :false

  }

},{

timestamps: true

})

module.exports = mongoose.model('message', MessageSchema)