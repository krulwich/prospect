// Example model


module.exports = function (sequelize, DataTypes) {

  var Sentence = sequelize.define('Sentence', {
    'text': {type: DataTypes.TEXT/*, unique: true*/}
  }, {
    classMethods: {
      associate: function (models) {
      }
    },
    classMethods: {
      convertSlugToText: function(slug){}
    },
    instanceMethods: {
      "getTextAsSlug": function(){}
    }
  });
  Sentence.belongsTo(Sentence, {as: 'Subject', foreignKey:'SubjectId'});
  Sentence.belongsTo(Sentence, {as: 'Topic', foreignKey:'TopicId'});
  Sentence.belongsTo(Sentence, {as: 'Object', foreignKey:'ObjectId'});
  Sentence.belongsTo(Sentence, {as: 'Prototype', foreignKey:'PrototypeId'});
  return Sentence;
};

